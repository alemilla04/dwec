import ShopService from "../services/ShopService.js";

document.addEventListener('DOMContentLoaded', setup);

async function setup(_){
    const service = new ShopService();
    const products = await service.getProducts();
    const categoryId = getCategoryIdFromUrl();

    renderProducts(products);
    await getAndRenderProducts(categoryId);

    recreateCart();

    document.querySelector('#tDivCartButton')
    //me redirige a la página de cart
        .addEventListener('click', _ => window.location = '/views/cart.htm');

    // setupShowCartWhenMouseOver();
}

// function setupShowCartWhenMouseOver() {
//     const nCartButton = document.querySelector('#tDivCartButton');
//     nCartButton.addEventListener('mouseover', showCart);

// }


function renderProducts(products) {
    const nTbody = document.querySelector('#tTabProducts>tbody');
    
    products.forEach( ({product_id: id, product_name: name, list_price: cost}) => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);
        nTr.setAttribute('data-product', id);

        const nTdName = document.createElement('td');
        nTr.appendChild(nTdName);

        const nTextName = document.createTextNode(name);
        nTdName.appendChild(nTextName);
        
        const nTdCost = document.createElement('td');
        nTr.appendChild(nTdCost);
        
        const nTextCost = document.createTextNode(cost);
        nTdCost.appendChild(nTextCost);
        
        const nTdAdd = document.createElement('td');
        nTr.appendChild(nTdAdd);
        
        nTdAdd.textContent = '+';
        nTdAdd.setAttribute('data-price', cost);
        nTdAdd.setAttribute('data-name', name);
        nTdAdd.setAttribute('data-id', id);
        nTdAdd.addEventListener('click', addProductToCart);

        
    });
}

async function getAndRenderProducts(categoryId){
    const service = new ShopService();
    let products;

    if (!categoryId) {
        products = await service.getProducts();
    } else {
        products = await service.getProductByCategory(categoryId);
    }

    renderProducts(products);
}

function getCategoryIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const categoryId = parseInt(params.get('category'));
    return categoryId; 
}

async function addProductToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const productName = e.target.dataset.name;
    const productPrice = parseFloat(e.target.dataset.price);
    
    let cart = JSON.parse(window.sessionStorage.getItem('cart'));
    if(!cart) {
        cart = [];
    }
    
    cart.push({ id: productId, name: productName, price: productPrice });
    window.sessionStorage.setItem('cart', JSON.stringify(cart));
}

function recreateCart(_) {
    //asi recupero la cesta del session storage y lo parseo a json
    const cart = JSON.parse(window.sessionStorage.getItem('cart'));
    if(cart) {
        const nTbody = document.querySelector('#tTabCart>tbody');
        //borra todo lo que haya en la etiqueta
        nTbody.innerHTML = '';
        cart.forEach(product => {
            const nTr = document.createElement('tr');
            nTbody.appendChild(nTr);

            const nTdName = document.createElement('td');
            nTr.appendChild(nTdName);
            nTdName.textContent = product.name;
            
            const nTdPrice = document.createElement('td');
            nTr.appendChild(nTdPrice);
            nTdPrice.textContent = product.price;
        });
    }
}
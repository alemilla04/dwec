import ProductsService from "./ProductsService.js";

export async function getAndRenderProducts() {
    const service = new ProductsService();
    const products = await service.getProducts();
    renderProducts(products);
}

function renderProducts(products) {
    const nTbody = document.querySelector('#tTabProducts>tbody');

    products.forEach(({id, name, precio}) => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTdName = document.createElement('td');
        nTr.appendChild(nTdName);
        const nTextName = document.createTextNode(name);
        nTdName.appendChild(nTextName);

        const nTdPrecio = document.createElement('td');
        nTr.appendChild(nTdPrecio);
        const nTextPrecio = document.createTextNode(precio);
        nTdPrecio.appendChild(nTextPrecio);

        const nTdButton = document.createElement('td');
        nTr.appendChild(nTdButton);
        const nButton = document.createElement('button');
        nTdButton.appendChild(nButton);

        const nTextBut = document.createTextNode('+');
        nButton.appendChild(nTextBut);
        nButton.setAttribute('id', `tBut${id}`);
        nButton.setAttribute('data-product', `${id}`);
        nButton.addEventListener('click', addProductToCart);
    });
}

function addProductToCart(e) {
    let cart = JSON.parse(window.localStorage.getItem('cart'));

    if (!cart) {
        cart = [];
    }

    const productId = parseInt(e.target.dataset.product);
    cart.push(productId);
    window.localStorage.setItem('cart', JSON.stringify(cart));
}
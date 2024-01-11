document.addEventListener('DOMContentLoaded', _ => {
    renderCart();
})

function renderCart(_) {
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
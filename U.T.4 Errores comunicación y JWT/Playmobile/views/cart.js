import PlaymobilService from "../services/PlaymobilService.js";
import { openSpinner, closeSpinner } from "./spinner.js";

document.addEventListener("DOMContentLoaded", setup);

async function setup(_) {
    const cart = JSON.parse(window.localStorage.getItem('cart'));
    renderCart(cart);
    logout();
}

function renderCart(cart) {
    const nTbody = document.querySelector('#tTabCart');

    cart.forEach(elements => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTdName = document.createElement('td');
        nTbody.appendChild(nTdName);
        const nTextName = document.createTextNode(elements.name);
        nTdName.appendChild(nTextName);

        const nTdPrice = document.createElement('td');
        nTbody.appendChild(nTdPrice);
        const nTextPrice = document.createTextNode(elements.price);
        nTdPrice.appendChild(nTextPrice);
    });
    const nTr = document.createElement('tr');
    nTbody.appendChild(nTr);
    const nTd = document.createElement('td');
    nTr.appendChild(nTd);
    nTd.textContent = 'Total';
    const nTdTotal = document.createElement('td');
    nTr.appendChild(nTdTotal);
    const nTextTotal = document.createTextNode(cart[0].price);
    nTdTotal.appendChild(nTextTotal);
}




function logout() {
    const nDivLogout = document.querySelector("#tDivLogout");
    nDivLogout.addEventListener('click', setupLogout);
}

function setupLogout(){
    window.location = '/views/login.html';
}
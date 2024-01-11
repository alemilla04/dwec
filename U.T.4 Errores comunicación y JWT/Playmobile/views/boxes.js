import PlaymobilService from "../services/PlaymobilService.js";
import { openSpinner, closeSpinner } from "./spinner.js";

document.addEventListener("DOMContentLoaded", setup);

async function setup(_) {
    openSpinner();
    const boxes = await getBoxes();
    renderBoxes(boxes);
    closeSpinner();
    logout();
    goToCart();
}

function renderBoxes(boxes) {
    const nTbody = document.querySelector('#tTableBoxes>tbody');

    boxes.forEach( ({uuid, denomination: deno, price}) => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTdDenomination = document.createElement('td');
        nTr.appendChild(nTdDenomination);
        
        nTdDenomination.setAttribute('data-uuid', uuid);
        const nTextDeno = document.createTextNode(deno);
        nTdDenomination.appendChild(nTextDeno);
        nTdDenomination.addEventListener('click', setParamsInTheUrl);

        const nTdPrice = document.createElement('td');
        nTr.appendChild(nTdPrice);
        const nTextPrice = document.createTextNode(price);
        nTdPrice.appendChild(nTextPrice);

        const nTdAdd = document.createElement('button');
        nTr.appendChild(nTdAdd);

        const nTextAdd = document.createTextNode('+');
        nTdAdd.appendChild(nTextAdd);
        nTdAdd.setAttribute('id', 'tButAdd');
        nTdAdd.setAttribute('class', 'add');
        nTdAdd.setAttribute('data-price', price);
        nTdAdd.setAttribute('data-name', deno);
        nTdAdd.setAttribute('data-uuid', uuid);
        nTdAdd.addEventListener('click', addProductToCart);

    });
}

function addProductToCart(e){
    const productPrice = parseFloat(e.target.dataset.price); 
    const productName = e.target.dataset.name; 
    const productUuid = e.target.dataset.uuid;

    const cart = [];
    cart.push({ uuid: productUuid, name: productName, price: productPrice});
    window.localStorage.setItem('cart', JSON.stringify(cart));
}

function logout() {
    const nDivLogout = document.querySelector("#tDivLogout");
    nDivLogout.addEventListener('click', setupLogout);
}

function setupLogout(){
    window.location = '/views/login.html';
}

function goToCart() {
    document.querySelector("#tDivCartButton").addEventListener('click', goToCart => {
        window.location = '/views/cart.html';
    });
}

async function getUuidFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const serieUuid = params.get('serie');
    return serieUuid;
}

async function getBoxes() {
    const service = new PlaymobilService();
    const uuid = await getUuidFromUrl();
    let boxesUuid = [];
    boxesUuid = await service.getBoxesUuid(uuid);

    let boxes = [];

    for(let i = 0; i<boxesUuid.length; i++){
        boxes.push(await service.getBoxByUuid(boxesUuid[i]));
    }

    return boxes;
}

async function setParamsInTheUrl(e){
    const boxUuid = e.target.dataset.uuid;
    window.location = `/views/figures_box.html?box=${boxUuid}`;
}
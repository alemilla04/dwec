import PlaymobilService from "../services/PlaymobilService.js";
import { openSpinner, closeSpinner } from "./spinner.js";

document.addEventListener("DOMContentLoaded", setup);

async function setup(_) {
    openSpinner();
    const figures = await getFigures();
    await renderFigures(figures);
    closeSpinner();
    logout();
}

async function getUuidFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const boxUuid = params.get('box');
    return boxUuid;
}

async function renderFigures(figures) {
    let figuresUuid = [];
    figuresUuid = await getFiguresUuid();
    const nTbody = document.querySelector('#tTabFigures>tbody');

    figures.forEach( figure => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);
        nTr.setAttribute('data-uuid', figure.uuid);

        const nTdDeno = document.createElement('td');
        nTr.appendChild(nTdDeno);
        const nTextDeno = document.createTextNode(figure.denomination);
        nTdDeno.appendChild(nTextDeno);

        const nTdBarras = document.createElement('td');
        nTr.appendChild(nTdBarras);
        const nTextBarras = document.createTextNode(figure.barcode);
        nTdBarras.appendChild(nTextBarras);

        const nTdQuantity = document.createElement('td');
        nTr.appendChild(nTdQuantity);

        for(let i = 0; i<figuresUuid.length; i++){
            if(figuresUuid[i].figure === figure.uuid){
                const nTextQuantity = document.createTextNode(figuresUuid[i].quantity);
                nTdQuantity.appendChild(nTextQuantity);
            }
        }

        const nTdImage = document.createElement('td');
        nTr.appendChild(nTdImage);
        const nImage = document.createElement('img');
        nTdImage.appendChild(nImage);
        nImage.setAttribute('src', `http://127.0.0.1:8082/assets/${figure.image}`);
        nImage.setAttribute('id', 'tImgFigures');
        nImage.setAttribute('class', 'imgFigures');
        nImage.style.width = "100px";
        nImage.style.height = "100px";
    });

}

async function getFiguresUuid() {
    const service = new PlaymobilService();
    const boxUuid = await getUuidFromUrl();
    let figuresUuid = [];
    figuresUuid = await service.getFiguresOfBox(boxUuid);
    return figuresUuid;
}

async function getFigures() {
    const service = new PlaymobilService();
    const boxUuid = await getUuidFromUrl();
    let figuresUuid = [];
    figuresUuid = await service.getFiguresOfBox(boxUuid);

    let figures = [];

    for(let i = 0; i<figuresUuid.length; i++){
        figures.push(await service.getFigureByUuid(figuresUuid[i].figure));
    }

    return figures;
}

function logout() {
    const nDivLogout = document.querySelector("#tDivLogout");
    nDivLogout.addEventListener('click', setupLogout);
}

function setupLogout(e){
    window.location = '/views/login.html';
}
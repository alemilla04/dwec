import { PlaymobileService } from "../services/PlaymobileService.js";
import { openSpinner, closeSpinner } from "./spinner.js";

document.addEventListener("DOMContentLoaded", setup);

async function setup(_) {
    openSpinner();
    await renderFigures();
    closeSpinner();
}

async function renderFigures() {
    const service = new PlaymobileService();
    const boxUuid = getParams();
    const figures = await service.getFigures(boxUuid);
    const nTbody = document.querySelector("#tTabFigures>tbody");

    figures.forEach( async ({figure, quantity}) => {
        const {denomination, barcode, image} = await service.getFigureByUuid(figure);
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);
        nTr.setAttribute('data-uuid', figure);

        const nTdDeno = document.createElement('td');
        nTr.appendChild(nTdDeno);
        const nTextDeno = document.createTextNode(denomination);
        nTdDeno.appendChild(nTextDeno);

        const nTdBarcode = document.createElement('td');
        nTr.appendChild(nTdBarcode);
        const nTextBarcode = document.createTextNode(barcode);
        nTdBarcode.appendChild(nTextBarcode);

        const nTdQuantity = document.createElement('td');
        nTr.appendChild(nTdQuantity);
        const nTextQuantity = document.createTextNode(quantity);
        nTdQuantity.appendChild(nTextQuantity);

        const nTdImage = document.createElement('td');
        nTr.appendChild(nTdImage);
        const nImage = document.createElement('img');
        nTdImage.appendChild(nImage);
        nImage.setAttribute('src', `http://127.0.0.1:8082/assets/${image}`);
        nImage.style.width = "80px";
        nImage.style.height = "80px";
    });
}

function getParams() {
    const params = new URLSearchParams(window.location.search);
    const boxUuid = params.get('box');
    return boxUuid;
}
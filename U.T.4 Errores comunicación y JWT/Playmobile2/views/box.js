import { PlaymobileService } from "../services/PlaymobileService.js";
import { openSpinner, closeSpinner } from "./spinner.js";

document.addEventListener("DOMContentLoaded", setup);

async function setup(_) {
    openSpinner();
    await renderBoxes();
    closeSpinner();
}

async function renderBoxes() {
    const service = new PlaymobileService();
    const serieUuid = getParams();
    const boxes = await service.getBoxes(serieUuid);
    const nTbody = document.querySelector("#tTabBoxes>tbody");

    boxes.forEach( async box => {
        const boxByUuid = await service.getBoxByUuid(box);
        
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTdDeno = document.createElement('td');
        nTr.appendChild(nTdDeno);
        const nTextDeno = document.createTextNode(boxByUuid.denomination);
        nTdDeno.appendChild(nTextDeno);
        nTdDeno.setAttribute('data-uuid', boxByUuid.uuid);
        nTdDeno.addEventListener('click', setParamsInTheUrl);

        const nTdPrice = document.createElement('td');
        nTr.appendChild(nTdPrice);
        const nTextPrice = document.createTextNode(boxByUuid.price);
        nTdPrice.appendChild(nTextPrice);

    });
}

function setParamsInTheUrl(e) {
    const uuid = e.target.dataset.uuid;
    window.location = `/views/figures.html?box=${uuid}`;
}

function getParams() {
    const params = new URLSearchParams(window.location.search);
    const serieUuid = params.get('serie');
    return serieUuid;
}
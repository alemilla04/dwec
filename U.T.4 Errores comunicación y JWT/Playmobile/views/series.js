import AuthenticationService from "../services/AuthenticationService.js";
import PlaymobilService from "../services/PlaymobilService.js";
import { openSpinner, closeSpinner } from "./spinner.js";

document.addEventListener("DOMContentLoaded", setup);

async function setup(_) {
    openSpinner();
    const service = new PlaymobilService();
    const series = await service.getSeries();
    renderSeries(series);
    closeSpinner();
    logout();
}

async function renderSeries(series) {
    const nTbody = document.querySelector('#tTabSeries>tbody');
    series.forEach( serie => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);
        nTr.setAttribute('id', 'tTrSeries');
        nTr.setAttribute('value', serie.denomination);
        nTr.addEventListener('click', setParamsInTheUrl);
        
        const nTd = document.createElement('td');
        nTr.appendChild(nTd);
        nTd.dataset.uuid = serie.uuid;
        
        const nText = document.createTextNode(serie.denomination);
        nTd.appendChild(nText);
    });
}

function setParamsInTheUrl(e) {
    const uuid = e.target.dataset.uuid;
    window.location = `/views/boxes.html?serie=${uuid}`;
}

function logout() {
    const nDivLogout = document.querySelector("#tDivLogout");
    nDivLogout.addEventListener('click', setupLogout);
}

function setupLogout(e){
    const nDivLogout = e.target.value;
    window.location = '/views/login.html';
}





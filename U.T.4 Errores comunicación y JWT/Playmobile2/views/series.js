import { PlaymobileService } from "../services/PlaymobileService.js";
import { openSpinner, closeSpinner } from "./spinner.js";
import { AuthenticationService} from "../services/AuthenticationService.js";

document.addEventListener("DOMContentLoaded", setup);

async function setup(_) {
    openSpinner();
    const service = new PlaymobileService();
    const series = await service.getSeries();
    await renderSeries(series);
    closeSpinner();
    document.querySelector("#tButNext").addEventListener('click', setParamsInTheUrl);
}

async function renderSeries(series) {
    const service = new AuthenticationService();
    const nHeader = document.querySelector("#tHeadLogin");
    const nDiv = document.createElement('div');
    nHeader.appendChild(nDiv);
    const token = window.localStorage.getItem('token');
    const {firstname, lastname} = service.decodeToken(token);

    const nText = document.createTextNode(`${firstname} ${lastname}`);
    nDiv.appendChild(nText);
    const nTbody = document.querySelector("#tTabSeries>tbody");

    // series.forEach( serie => {
    //     const nTr = document.createElement('tr');
    //     nTbody.appendChild(nTr);
    //     const nTd = document.createElement('td');
    //     nTr.appendChild(nTd);
    //     const nText = document.createTextNode(serie.denomination);
    //     nTd.appendChild(nText);
    //     nTd.setAttribute('data-uuid', serie.uuid);
    //     nTd.addEventListener('click', setParamsInTheUrl);
    // });
    const nSelect = document.querySelector("#tSelecSeries");

    series.forEach( serie => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        const nText = document.createTextNode(serie.denomination);
        nOption.appendChild(nText);
        nOption.setAttribute('value', serie.uuid);
        // nSelect.addEventListener('change', setParamsInTheUrl);
    })

    
}

function setParamsInTheUrl(){
    // const nSelect = e.target;
    // const uuid = nSelect.value;
    const nSelect = document.querySelector("#tSelecSeries");
    const uuid = nSelect.value;
    window.location = `/views/box.html?serie=${uuid}`;
}


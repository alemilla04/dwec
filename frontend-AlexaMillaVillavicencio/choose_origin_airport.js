import AuthenticationService from "./services/AuthenticationService.js";
import AirportService from "./services/AirportService.js";
import { openSpinner, closeSpinner } from "./spinner.js";

document.addEventListener("DOMContentLoaded", setup);

async function setup(_) {
    openSpinner();
    showUser();

    try {
        const service = new AirportService();
        const airports = await service.getAirports();
        renderAirports(airports);
    } catch(error) {
        alert(`No se han podido recuperar los aeropuertos: ${error}. Por favor, refresque la pantalla.`)
        window.location = "./choose_origin_airport.htm";
    } finally {
        closeSpinner();
    }
    document.querySelector("#tButAero").addEventListener('click', setupBut);
}

function setupBut(_) {
    openSpinner();
    const nSelec = document.querySelector("#tSelecAirports");

    if(nSelec.value!='hidden'){
        setParamsInTheUrl();
    }
    closeSpinner();
}

async function showUser(){
    try {
        const service = new AuthenticationService();
        const token = window.sessionStorage.getItem('token');
        const {firstname, lastname} = await service.decodeToken(token);

        const nHeader = document.querySelector("#tHeadUser");
        const nText = document.createTextNode(`${firstname} ${lastname}`);
        nHeader.appendChild(nText);
    }catch(error) {
        window.location = "./index.htm";
    }
}

function renderAirports(airports) {
    const nSelec = document.querySelector("#tSelecAirports");
    airports.forEach( ({uuid, commonname: name, codename: code}) => {
        const nOption = document.createElement('option');
        nSelec.appendChild(nOption);
        const nText = document.createTextNode(`${name} (${code})`);
        nOption.appendChild(nText);
        nOption.setAttribute('value', uuid);
        nSelec.addEventListener('change', addSessionStorage);
    });
}

function addSessionStorage(e) {
    const nSelec = e.target;
    const uuid = nSelec.value;
    window.sessionStorage.setItem('codigo', uuid);
}

function setParamsInTheUrl() {
    const nSelec = document.querySelector("#tSelecAirports");
    const uuid = nSelec.value;
    window.location = `./choose_destination_airport.htm?origin_airport=${uuid}`;
}
import AuthenticationService from "./services/AuthenticationService.js";
import AirportService from "./services/AirportService.js";
import { openSpinner, closeSpinner } from "./spinner.js";

document.addEventListener("DOMContentLoaded", setup);

async function setup(_) {
    openSpinner();
    await showUser();
    try {
        const service = new AirportService();
        const aeroDestino = await service.getAirportByUuid(getParamsFromTheUrl());
        showAirportName(aeroDestino);
        const aerosDestino = await service.getUuidAerosDestinoByAirportUuid(getParamsFromTheUrl());
        await renderAerosDestino(aerosDestino);
    } catch(error) {
        alert(`No se han podido recuperar los aeropuertos: ${error}. Por favor, refresque la pantalla.`)
        window.location = "./choose_destination_airport.htm";
    } finally {
        closeSpinner();
    }
    document.querySelector("#tButAero").addEventListener('click', setupBut);
}

function setupBut(_) {
    openSpinner();
    const nSelec = document.querySelector("#tSelectAeroDestino");

    if(nSelec.value!='hidden'){
        setParamsInTheUrl();
    }
    closeSpinner();
}

async function renderAerosDestino(aerosDestino) {
    const service = new AirportService();
    const nSelect = document.querySelector("#tSelectAeroDestino");
    
    for(let i = 0; i<aerosDestino.length; i++) {
        const aeroDestino = await service.getAirportByUuid(aerosDestino[i]);
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        const nText = document.createTextNode(`${aeroDestino.commonname} (${aeroDestino.codename})`);
        nOption.appendChild(nText);
        nOption.setAttribute('value', aeroDestino.uuid);
        nSelect.addEventListener('change', addSessionStorage);
    }
}

function addSessionStorage(e) {
    const nSelect = e.target;
    const uuid = nSelect.value;
    window.sessionStorage.setItem('codigo', uuid);
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

function showAirportName(airport) {
    const nP = document.querySelector("#tPAero");
    const nText = document.createTextNode(airport.longname);
    nP.appendChild(nText);
}

function getParamsFromTheUrl(){
    const params = new URLSearchParams(window.location.search);
    const airportUuid = params.get('origin_airport');
    return airportUuid;
}

function setParamsInTheUrl() {
    const nSelec = document.querySelector("#tSelectAeroDestino");
    const destiUuid = nSelec.value;
    const originUuid = getParamsFromTheUrl();
    window.location = `./choose_flights.htm?origin_airport=${originUuid}&destination_airport=${destiUuid}`;
}
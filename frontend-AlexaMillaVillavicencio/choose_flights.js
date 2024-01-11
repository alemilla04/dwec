import AuthenticationService from "./services/AuthenticationService.js";
import AirportService from "./services/AirportService.js";
import { openSpinner, closeSpinner } from "./spinner.js";

document.addEventListener("DOMContentLoaded", setup);

async function setup(_){
    openSpinner();
    await showUser();
    try {
        const service = new AirportService();
        const originUuid = getOriginUuidFromTheUrl();
        const destiUuid = getDestiUuidFromTheUrl();
        const flights = await service.getFlights(originUuid, destiUuid);
        renderFligths(flights);
    } catch(error){
        alert(`No se han podido recuperar los aeropuertos: ${error}. Por favor, refresque la pantalla.`)
        window.location = "./choose_flights.htm";
    } finally{
        closeSpinner();
    }
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

function renderFligths(flights) {
    const nTbody = document.querySelector("#tTabVuelos>tbody");
    flights.forEach( ({uuid ,flightCode: code, datetime, flightPrice: fprice, suitcasePrice: sprice}) => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTdCode = document.createElement('td');
        nTr.appendChild(nTdCode);
        const nTextCode = document.createTextNode(code);
        nTdCode.appendChild(nTextCode);

        const nTdDate = document.createElement('td');
        nTr.appendChild(nTdDate);
        const nTextDate = document.createTextNode(datetime);
        nTdDate.appendChild(nTextDate);

        const nTdFlightPrice = document.createElement('td');
        nTr.appendChild(nTdFlightPrice);
        const nTextFlightPrice = document.createTextNode(fprice);
        nTdFlightPrice.appendChild(nTextFlightPrice);

        const nTdSuitcasePrice = document.createElement('td');
        nTr.appendChild(nTdSuitcasePrice);
        const nTextSuitcasePrice = document.createTextNode(sprice);
        nTdSuitcasePrice.appendChild(nTextSuitcasePrice);

        const nTdAdd = document.createElement('td');
        nTr.appendChild(nTdAdd);
        const nTextAdd = document.createTextNode("+");
        nTdAdd.appendChild(nTextAdd);
        nTdAdd.setAttribute('data-uuid', uuid);
        nTdAdd.setAttribute('data-code', code);
        nTdAdd.setAttribute('data-datetime', datetime);
        nTdAdd.setAttribute('data-fprice', fprice);
        nTdAdd.setAttribute('data-sprice', sprice);
        nTdAdd.addEventListener('click', addProductToCart);

    });
}

function showAirportName(airport) {
    const nP = document.querySelector("#tPAero");
    const nText = document.createTextNode(airport.longname);
    nP.appendChild(nText);
}

function addProductToCart(e){
    const uuid = e.target.dataset.uuid;
    const code = e.target.dataset.code;
    const datetime = e.target.dataset.datetime;
    const fprice = e.target.dataset.fprice;
    const sprice = e.target.dataset.sprice;

    const cart = [];
    const product = [];

    product.push({ uuid: uuid, flightCode: code, datetime: datetime, flightPrice: fprice, suitcasePrice: sprice});
    cart.push(product);

    window.sessionStorage.setItem('cart', JSON.stringify(cart));
}

function getOriginUuidFromTheUrl(){
    const params = new URLSearchParams(window.location.search);
    const originUuid = params.get('origin_airport');
    return originUuid;
}

function getDestiUuidFromTheUrl(){
    const params = new URLSearchParams(window.location.search);
    const destiUuid = params.get('destination_airport');
    return destiUuid;
}
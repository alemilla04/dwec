import AuthenticationService from "./services/AuthenticationService.js";
import {openSpinner, closeSpinner} from "./spinner.js";

document.addEventListener("DOMContentLoaded", setupButton);

function setupButton(_) {
    document.querySelector("#tButValidate").addEventListener('click', validateUser);
}

async function validateUser() {
    openSpinner();

    const username = document.querySelector("#tTextUser").value;
    const password = document.querySelector("#tPasPassword").value;

    const service = new AuthenticationService();
    try {
        const token = await service.validateUserAndRetrieveToken(username, password);
        window.sessionStorage.setItem('token', token);
        const {firstname, lastname} = await service.decodeToken(token);
        window.sessionStorage.setItem('fullname', `${firstname} ${lastname}`);
        window.location = "./choose_origin_airport.htm";
    } catch(error) {
        alert(`No se ha podido autentificar al usuario: ${error}`)
        window.location = "./index.htm";
    } finally {
        closeSpinner();
    }
}
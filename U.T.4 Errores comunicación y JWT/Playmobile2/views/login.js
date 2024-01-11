import {openSpinner, closeSpinner} from "./spinner.js";
import { AuthenticationService } from "../services/AuthenticationService.js";

document.addEventListener("DOMContentLoaded", setupButton);

function setupButton(_) {
    document.querySelector("#tButValidate").addEventListener('click', validateUser);
}

async function validateUser() {
    openSpinner();

    const username = document.querySelector("#tTxtUser").value;
    const password = document.querySelector("#tPassPassword").value;

    const service = new AuthenticationService();
    try {
        const token = await service.validateAndRetrieveToken(username, password);
        window.localStorage.setItem('token', token);

        const {firstname, lastname} = await service.decodeToken(token);
        window.localStorage.setItem('fullname', `${firstname} ${lastname}`);
        window.location = "/views/series.html";
    } catch (error){
        alert("Error, datos incorrectos.");
        window.location = "/views/login.html";
    } finally {
        closeSpinner();
    }
}
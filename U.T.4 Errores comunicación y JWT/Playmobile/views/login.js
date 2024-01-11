import AuthenticationService from "../services/AuthenticationService.js";
import { openSpinner, closeSpinner } from "./spinner.js";

document.addEventListener("DOMContentLoaded", setupButton);

function setupButton(_) {
    document.querySelector('#tButValidate').addEventListener('click', showInformationUser)
}

async function showInformationUser() {
    openSpinner();

    const username = document.querySelector('#tTxtUser').value;
    const password = document.querySelector('#tPassPassword').value;
    
    const service = new AuthenticationService();
    
    if(!username || !password) {
        alert('Faltan campos');
        closeSpinner();
        return;
    } else {
        try{
            const token = await service.validateUserAndRetrieveToken(username, password);
            window.localStorage.setItem('token', token);
            const {firstname, lastname} = service.decodeToken(token);
            window.localStorage.setItem('fullname', `${firstname} ${lastname}`);
            window.location = '/views/series.html';
        } catch(error){
            alert('Error con los datos');
            window.location = '/views/login.html';
        } finally {
            closeSpinner();
        }
        
    }

}

// async function validateUser() {
//     const service = new AuthenticationService();

//     let token;
//     try{
//         const token = await service.validateUserAndRetrieveToken('sonia.silverado', 'ss');
//         console.log(token);
//     } catch(error){
//         console.log(error.message);
//         return;    
//     }

//     try {
//         const {firstname, lastname} = service.decodeToken(token);
//         console.log(firstname, lastname);
//     } catch(error) {
//         console.log(error.message);
//         return;
//     }

//     window.sessionStorage.setItem('token', token);
//     window.sessionStorage.setItem('fullname', `${firstname} ${lastname}`);
// }

// validateUser();

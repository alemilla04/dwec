import { datosEmpresa as employees } from "./datos_empresa (1).js";

document.addEventListener("DOMContentLoaded", setup);

function setup(){
    fillHairColor(employees);
}

function fillHairColor(employees){
    const nDiv = document.getElementById('tDivHairColors');

    employees.forEach(employee => {
        const nInput = document.createElement('input');
        nDiv.appendChild(nInput);
        nInput.setAttribute('type', 'checkbox');
        nInput.setAttribute('name', 'hairColor');
        nInput.setAttribute('id', `tChk${employee.colorPelo}`);
        nInput.setAttribute('value', employee.colorPelo);
        nInput.addEventListener('change', addHairColor);

        const nLabel = document.createElement('label');
        nLabel.setAttribute('for', employee.colorPelo);
        nDiv.appendChild(nLabel);

        const nText = document.createTextNode(employee.colorPelo);
        nLabel.appendChild(nText);
        
    })



}
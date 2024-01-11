import { vehicles } from "./data.js";

document.addEventListener('DOMContentLoaded', setup);

function setup(_){
    fillCheckBoxVehicles(vehicles);
}

function fillCheckBoxVehicles(vehicles){
    const nDiv = document.getElementById('tDivVehicles');
    vehicles.forEach( vehicles => {
        const nInput = document.createElement('input');
        nDiv.appendChild(nInput);

        nInput.setAttribute('type', 'checkbox');
        nInput.setAttribute('name', vehicles.model.replace(' ',''));
        nInput.setAttribute('id', `tChk${vehicles.key}`);
        nInput.setAttribute('value', vehicles.model);
        // nInput.setAttribute('onchange', `addVehicleToTable("${vehicles.key}")`);
        // nInput.onchange = addVehicleToTable;
        nInput.addEventListener('change', addVehicleToTable);

        const nLabel = document.createElement('label');
        nLabel.setAttribute('for', vehicles.model);
        nDiv.appendChild(nLabel);

        const nText = document.createTextNode(vehicles.model);
        nLabel.appendChild(nText);
    }
    )
    
}

function addVehicleToTable(e){
    const nInput = e.target; //Me da la etiqueta que lanzó el evento
    const vehicleId = nInput.value; //en esa etiqueta, en value guardé el código del coche
    const vehicle = vehicles.find(vehicle => vehicle.model == vehicleId);
    const nTBody = document.getElementById('tTbVehicles');

    const nTr = document.createElement('tr');
    nTBody.appendChild(nTr);

    const nTdModel = document.createElement('td');
    const nTdPhoto = document.createElement('td');

    nTr.appendChild(nTdModel);
    nTr.appendChild(nTdPhoto);

    const nText = document.createTextNode(vehicle.model);
    nTdModel.appendChild(nText);

    // const path = `./photos/${vehicle.photo}`;
    const path = `../../assets/photos/${vehicle.photo}`;
    const nImg = document.createElement('img');
    nTdPhoto.appendChild(nImg);
    nImg.setAttribute('src', path);
    
}
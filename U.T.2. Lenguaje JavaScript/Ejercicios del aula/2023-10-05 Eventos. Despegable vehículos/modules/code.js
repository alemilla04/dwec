import { vehicles } from "./data.js";

document.addEventListener('DOMContentLoaded', setup);

function setup(_){
    const nSelect = document.getElementById('tSelVehicles');
    nSelect.addEventListener('change', showVehicle);
    fillSelectVehicles(vehicles);
}


function fillSelectVehicles(){
    const nSelect = document.getElementById('tSelVehicles');
    vehicles.forEach(vehicles => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', vehicles.key);
        nOption.setAttribute('data-photo', vehicles.photo);

        const nText = document.createTextNode(vehicles.model);
        nOption.appendChild(nText);
    });
}

function showVehicle(e){
    const nSelect = e.target;
    const key = nSelect.value;
    const vehicle = vehicles.find(vehicle => vehicle.key === key);

    nSelect.options[nSelect.selectedIndex]

    const path = `./photos/${vehicle.photo}`;
    const nImg = document.getElementById('tImgVehicle');
    nImg.setAttribute('src', path);

}

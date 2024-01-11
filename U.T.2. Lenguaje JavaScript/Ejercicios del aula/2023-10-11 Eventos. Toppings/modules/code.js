import { toppings } from "./datos.js";

document.addEventListener("DOMContentLoaded", setup);

function setup(){
    fillTableToppings(toppings);
}

function fillTableToppings(toppings) { 
    const nTbody = document.getElementById('tTbodyToppings');

    toppings.forEach(topping => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);
    
        const nTdBlank = document.createElement('td')
        nTr.appendChild(nTdBlank);

        const nInput = document.createElement('input');
        nTdBlank.appendChild(nInput);
        // nInput.setAttribute('type', 'checkbox');
        nInput.type = 'checkbox';
        
        // nInput.setAttribute('name', 'toppings');
        // nInput.setAttribute('id', `tChkbox${topping.id}`);
        // nInput.setAttribute('value', topping.id);
        nInput.value = topping.id;
 
        const nTdTopping = document.createElement('td')
        nTr.appendChild(nTdTopping);
        const nTextTopping = document.createTextNode(topping.type);
        nTdTopping.appendChild(nTextTopping);

        const nTdPrice = document.createElement('td')
        nTr.appendChild(nTdPrice);
        const nTextPrice = document.createTextNode(topping.price);
        nTdPrice.appendChild(nTextPrice);
    });
}
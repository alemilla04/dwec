'use strict'
const streets = typesOfStreet;

function fillStreets(streets){
    const nDiv = document.getElementById('tDivTypesOfStreet');
    // const nInput = document.createElement('input');
    // nDiv.appendChild(nInput);
    
    // nInput.setAttribute("type", "radio");
    // nInput.setAttribute("name", "gender");
    // nInput.setAttribute("value", "ma");
    // nInput.setAttribute("id", "tRadMale");
    
    // const nLabel = document.createElement('label');
    // nDiv.appendChild(nLabel);
    // const nText = document.createTextNode('Masculino');
    // nLabel.appendChild(nText);

    
    
    for(const {shortName, longName} of streets){
        const nInput2 = document.createElement('input');
        nDiv.appendChild(nInput2);

        nInput2.setAttribute("type", "radio");
        nInput2.setAttribute("name", "street");
        nInput2.setAttribute("value", shortName);
        nInput2.setAttribute("id", `tRad${longName}`);

        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.setAttribute("for", `tRad${longName}`);

        const nText = document.createTextNode(longName);
        nLabel.appendChild(nText);

    }

}
const orderByLongName = (type1, type2) => type1.longName.localeCompare(type2.longName);
fillStreets(streets.sort(orderByLongName));

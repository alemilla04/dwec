document.addEventListener("DOMContentLoaded", setup);

function setup(_) {
    const nButton = document.getElementById("tButAskfor");
    nButton.addEventListener("click", retrieveShowNames);
}

function fillTable(data) {
    const nTable = document.getElementById("tTbdNames");
    nTable.innerHTML = '';
    data.forEach(data => {
        const nTr = document.createElement("tr");
        nTable.appendChild(nTr);
        const nTd = document.createElement("td");
        nTr.appendChild(nTd);
        nTd.textContent = data;
    });


}

function retrieveShowNames(_) {
    const nInput = document.getElementById("tNumofQuantity");
    const quantity = nInput.value;
    // const nRadioMale = document.getElementById("tRadMale");
    // const nRadioFemale = document.getElementById("tRadFemale");
    // const nRadioBoth = document.getElementById("tRadBoth");
    // let gender;

    // if(nRadioMale.checked){  
    //     gender = nRadioMale.value;
    // }else if(nRadioFemale.checked){
    //     gender = nRadioFemale.value;
    // }else{
    //     gender = nRadioBoth.value;
    // }

    const gender = document.querySelector('input[type="radio"][name = "gender"]:checked').value;

    fetch(`https://namey.muffinlabs.com/name.json?count=${quantity}&type=${gender}`)
        .then(response => response.json())
        .then(data => fillTable(data))
        .catch(console.error);

}
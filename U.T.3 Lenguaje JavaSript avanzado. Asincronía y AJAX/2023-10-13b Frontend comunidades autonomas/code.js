document.addEventListener('DOMContentLoaded', setup);

function setup() {
    fetch('http://127.0.0.1:3000/api/comunidades')
        .then(response => response.json()) //devuelve una promesa, que llega en un futuro, en este caso en 3 seg. 
        .then(data => fillSelectComunidades(data.comunidades));
}
//empoy es url

function fillSelectComunidades(comunidades){
    const nSelect = document.getElementById('tSelComunidades');

    comunidades.forEach(comunidad => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        const nText = document.createTextNode(comunidad.nombre);
        nOption.appendChild(nText);      
    })
}
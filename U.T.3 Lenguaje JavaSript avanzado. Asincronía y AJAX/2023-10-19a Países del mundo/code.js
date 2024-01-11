document.addEventListener("DOMContentLoaded", setup);

function setup(e){
    const nSelect = document.querySelector('#tSelectContinents');
    nSelect.addEventListener('change', retrieveAndShowCountriesByContinent);
    retrieveAndShowContinents();
    
}

function retrieveAndShowContinents(){
    //Hasta que el fetch recupere los datos muestro el spinner
    showSpinnerLoading();

    const url = 'http://10.32.155.14:8080/api/continents';
    fetch(url)
        .then(response => response.json())
        .then( ({ continents }) => fillContinents(continents))
        .catch(alert);
}

function fillContinents(continents) {
    const nSelect = document.getElementById('tSelectContinents');
    
    continents.forEach(({code, name}) => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.textContent = name;
        nOption.setAttribute("value", code);
    });
    //Después de pintar la tabla oculto el spinner
    hideSpinnerLoading();
}

function retrieveAndShowCountriesByContinent(e) {
    showSpinnerLoading();
    //Le gusta más esta
    const nSelect = e.target;
    const continentId = nSelect.value;
    // const nSelect = document.querySelector('#tSelContinent');

    const url = 'http://10.32.155.14:8080/api/countries';
    fetch(url)
        .then(response => response.json())
        .then( ({ countries }) => {
           const filteredCountries = countries.filter(({continent}) => continent === continentId);
           fillListCountries(filteredCountries);
        })
        .catch(alert);
}

function fillListCountries(countries) {
    const nOl = document.querySelector('#tOlCountries');

    countries.forEach(({ code, name }) => {
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);
        // nOption.setAttribute('value', code);

        const nText = document.createTextNode(name);
        nLi.appendChild(nText);
    });

    hideSpinnerLoading();
}

function showSpinnerLoading() {
    //En JS se usa el id y en CSS el class
    // const nImage = document.querySelector('#tImgLoading');
    const nImage = document.querySelector('.spinner-loading');
    nImage.classList.remove('hidden');
}

function hideSpinnerLoading() {
    //En JS se usa el id y en CSS el class
    // const nImage = document.querySelector('#tImgLoading');
    const nImage = document.querySelector('.spinner-loading');
    nImage.classList.add('hidden');
}
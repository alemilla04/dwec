document.addEventListener("DOMContentLoaded", setup);

function setup(e){
    retrieveAndShowContinents();
}

function retrieveAndShowContinents(){
    const url = 'http://10.32.155.14:8080/api/continents';

    fetch(url)
        .then(response => response.json())
        .then( ({ continents }) => fillContinents(continents))
        .catch(alert);
}

function fillContinents(continents){
    const nDiv = document.querySelector('#tDivContinents');

    continents.forEach(({code, name}) => {
        const nInput = document.createElement('input');
        nDiv.appendChild(nInput);
        nInput.setAttribute("type", "checkbox");
        //name se usa para el submit
        nInput.setAttribute("name", code);
        nInput.setAttribute("id", `tChk${code}`);
        //value en un checkbox significa encendido o apagado
        nInput.setAttribute("value", code);
        //sirve para recuperar la info de la etiqueta
        nInput.setAttribute("data-continent", code);
        nInput.setAttribute("change", retrieveAndShowCountriesByContinent);

        const nLabel = document.createElement('label');
        nLabel.setAttribute("for", `tChk${code}`);
        nLabel.textContent = name;
        nDiv.appendChild(nLabel);
    });
}

function retrieveAndShowCountriesByContinent(e) {
    const nInput = e.target;
    const continentId = nInput.dataset.continent;
    
    if(nInput.checked) {
        const url = 'http://10.32.155.14:8080/api/countries';
    
        fetch(url)
            .then(response => response.json())
            //dentro del data está todo el contenido del api
            .then(data => {
                const countries = data.countries.filter( country => country.continent === continentId);
                showCountries(countries);
            })
            .catch(alert);
    } else {
        const nTbody = document.querySelector('#tTabCountries>tbody')

        const rows = document.querySelectorAll(`tr[data-continent="${continentId}"]`)
        for (const row of rows) {
            nTbody.removeChild();
        }
    }
}

function showCountries(countries) {
    const nTable = document.querySelector('#tTabCountries');
    const nTBody = document.createElement('tbody');
    nTable.appendChild(nTBody);

    countries.forEach((country) => {
        const nTr = document.createElement('tr');
        nTr.setAttribute("data-continent", country.code);
        nTBody.appendChild(nTr);

        const nImage = document.createElement('img');

        const nTdFlag = document.createElement('td');
        nTdFlag.appendChild(nImage);
        nTr.appendChild(nTdFlag);
        const nTdName = document.createElement('td');
        nTr.appendChild(nTdName);
        const nTdPopulation = document.createElement('td');
        nTr.appendChild(nTdPopulation);
        
        const url = `http://10.32.155.14:8080/api/countries/${country.code}`;
        
        fetch(url)
            .then(response => response.json())
            .then(({country}) => {
                nImage.setAttribute('src', country.flag);
                nTdName.textContent = country.name;
                nTdPopulation.textContent = country.population;
            })  
            .catch(alert);

    })

}

function showSpinnerLoading() {
    const nImage = document.querySelector('.spinner-loading');
    nImage.classList.remove('hidden');
}

function hideSpinnerLoading() {
    const nImage = document.querySelector('.spinner-loading');
    nImage.classList.add('hidden');
}
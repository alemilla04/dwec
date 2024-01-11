import CountriesService from './services/CountriesService.js';

document.addEventListener('DOMContentLoaded', setup);

async function setup() {
    const service = new CountriesService();
    const continents = await service.getContinents();
    //render significa pintar
    renderContinents(continents);
    setupCloseButton();
}

function setupCloseButton() {
    document.querySelector('#tDivCerrar').addEventListener('click', _ => {
        document.querySelector('#tDivFlag').classList.add('hidden');
        document.body.style.overflow = 'auto';
    });
}

function renderContinents(continents) {
    const nDiv = document.querySelector('#tDivContinents');
    
    for (const {code, name} of continents) {
        const nCheckbox = document.createElement('input');
        nDiv.appendChild(nCheckbox);
        nCheckbox.type = 'checkbox';
        nCheckbox.id = `tChk${code}`;
        nCheckbox.value = code;
        nCheckbox.dataset.continent = code;
        nCheckbox.addEventListener('change', showOrHideCountries);
        
        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.htmlFor = `tChk${code}`;
        nLabel.textContent = name;
    }
}

async function showOrHideCountries(e) {
    const nCheckbox = e.currentTarget;
    const continentId = nCheckbox.value;

    const service = new CountriesService();
    const countries = await service.getCountriesByContinent(continentId);
    if(nCheckbox.checked){
        renderCountries(countries);
    } else{
        deleteCountries(continentId);
    }
    
}

function renderCountries(countries) {
    const nOl = document.querySelector('#tOlCountries');

    countries.forEach(({ code, name, continent }) => {
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);
        nLi.dataset.country = code;
        nLi.dataset.continent = continent;
        nLi.innerText = name;
        nLi.addEventListener('click', renderFlag);
    });
}

function deleteCountries(continentId) {
    const nListoRemove = document.querySelectorAll(`li[data-continent="${continentId}"]`);
    const nOl = document.querySelector('#tOlCountries');
    for(const nLi of nListoRemove) {
        nOl.removeChild(nLi);
    }
}

async function renderFlag(e) {
    const countryId = e.target.dataset.country;
    const service = new CountriesService();
    const { flags } = await service.getCountryById(countryId);
    document.querySelector('#tImgFlag').src = flags.svg;
    document.querySelector('#tDivFlag').classList.remove('hidden');
    document.body.style.overflowY = 'hidden';
}
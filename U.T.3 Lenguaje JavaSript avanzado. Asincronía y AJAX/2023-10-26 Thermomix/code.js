import ThermomixService from "./services/ThermomixService.js";

document.addEventListener('DOMContentLoaded', setup);

async function setup() {
    const service = new ThermomixService();
    const books = await service.getBooks();

    renderBooks(books);

    renderDishes();
}

function renderBooks(books) {
    const nSelect = document.querySelector('#tSelBooks');

    books.forEach(({ clave, titulo}) => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', clave);
        nSelect.addEventListener('change', showDishes)

        const nText = document.createTextNode(titulo);
        nOption.appendChild(nText);
        
    });
}

async function showDishes(e) {
    const nSelect = e.target
    const bookId = nSelect.value;

    const service = new ThermomixService();
    const dishes = await service.getDishesById(bookId);

    renderDishes(dishes);
}

function renderDishes(dishes) {
    const nTBody = document.querySelector('#tTBody');
    
    dishes.forEach( ({clave, nombre, foto}) => {
        const nTr = document.createElement('tr');
        nTBody.appendChild(nTr);
    
        const nTdImage = document.createElement('td');
        nTr.appendChild(nTdImage);
        
        const nImage = document.createElement('img');
        nTdImage.appendChild(nImage);
        nTdImage.dataset.recipe = clave;
        nImage.setAttribute('src', `http://127.0.0.1/thermomix/fotos/${foto}`);
        nTdImage.addEventListener('click', showRecipe);

        const nTdName = document.createElement('td');
        nTr.appendChild(nTdName);
        
        const nText = document.createTextNode(nombre);
        nTdName.appendChild(nText);
    });
}

async function showRecipe(e) {
    const nTdImage = e.target;
    const nTdData = nTdImage.dataset.recipe;

    const service = new ThermomixService();
    const recipe = await service.getRecipeById(nTdData);

    renderRecipe(recipe);
}

function renderRecipe(recipe) {
    const nDiv = document.querySelector('#tDivRecipe');
    const nSpan = document.createElement('span');
    nDiv.appendChild(nSpan);
    nSpan.textContent = recipe;
}


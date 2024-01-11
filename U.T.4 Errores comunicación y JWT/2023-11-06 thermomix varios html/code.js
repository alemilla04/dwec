import ThermomixService from "./services/ThermomixService.js";

import MiHeaderComponent from "./components/MiHeaderComponent.js";
window.customElements.define('mi-header', MiHeaderComponent);

import MiNavComponent from "./components/MiNavComponent.js";
window.customElements.define('mi-nav', MiNavComponent);

export async function retrieveAndRenderBooks(){
    const service = new ThermomixService();
    const books = await service.getBooks();
    renderBooks(books);

}


function renderBooks(books){
    const nUl = document.querySelector("#tUlBooks");
    
    books.forEach(({clave,titulo}) => {
        const nLi = document.createElement("li");
        nUl.appendChild(nLi);
        nLi.dataset.book = clave;
        nLi.textContent = titulo;
        nLi.addEventListener("click",gotoPageBooks);
    });
}

function gotoPageBooks(e){
    const bookId = parseInt(e.target.dataset.book);
    window.location = `./dishes.html?book=${bookId}`; 
}


function getBookId(){
    const params = new URLSearchParams(window.location.search);
    return params.get("book");
}

export async function retrieveAndRenderDishes(){
    const bookId = getBookId();
    const service = new ThermomixService();
    if(!bookId){
        const dishes = await service.getDishes();
        renderDishes(dishes);
    }
    else{
        const dishes = await service.getDishesByBook(bookId);
        renderDishes(dishes);
    }

}


function renderDishes(dishes){
    const nUl = document.querySelector("#tUlDishes");
    
    dishes.forEach(({clave,nombre,foto}) => {
        const nLi = document.createElement("li");
        nUl.appendChild(nLi);
        nLi.dataset.dish = clave;
        nLi.textContent = nombre;
        nLi.addEventListener("click",gotoPageDishes);
    });
}


function gotoPageDishes(e){
    const dishId = parseInt(e.target.dataset.dish);
    window.location = `./recipes.html?dish=${dishId}`; 
}

function getDishId(){
    const params = new URLSearchParams(window.location.search);
    return params.get("dish");
}

export async function retrieveAndRenderRecipe(){
    const dishId = getDishId();
    const service = new ThermomixService();
    const dish = await service.getRecipebyDish(dishId);
    document.querySelector("#tDivRecipe").textContent = dish;
}
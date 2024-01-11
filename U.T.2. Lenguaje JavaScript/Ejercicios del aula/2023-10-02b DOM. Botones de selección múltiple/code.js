import { datosEmpresa, datosEmpresa as employees } from "./datos_empresa (1).js";

function retrieveCategories(employees) {
    const categoriesWithRepeated = employees.map(employee => employee.categoria);
    return Array.from(new Set(categoriesWithRepeated));
}

function fillCategoriesContainer(categories) {
    for(const category of categories){
        const nDiv = document.getElementById('tDivCategories');
        const nInput = document.createElement('input');
        nDiv.appendChild(nInput);
        nInput.setAttribute('type', 'checkbox');
        nInput.setAttribute('name', category);
        nInput.setAttribute('id', `tChk${category}`);
        nInput.setAttribute('value', 'si');
    
        const nLabel = document.createElement('label');
        nLabel.setAttribute('for', `tChk${category}`);
        const nText = document.createTextNode(category);
        nLabel.appendChild(nText);
        nDiv.appendChild(nLabel);


    }

}
const categories = retrieveCategories(datosEmpresa);
fillCategoriesContainer(categories);
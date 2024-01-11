'use strict';

const employees = datosEmpresa;

// ---------------------------------------------
const result = Object.groupBy(employees, function (employee){
    return employee.categoria;
})

console.log(result);
fillTableEmployeesNumber(result);

function fillTableEmployeesNumber(categories){
    const nTable = document.getElementById('tTabEmployeesNumber');

    for(const i in categories){
        const nTr = document.createElement('tr');
        nTable.appendChild(nTr);

        const nTdName = document.createElement('td');
        nTr.appendChild(nTdName);

        const nTextName = document.createTextNode(i);
        nTdName.appendChild(nTextName);

        const nTdQuantity = document.createElement('td');
        nTr.appendChild(nTdQuantity);

        const nTextQuantity = document.createTextNode(categories[i].length);
        nTdQuantity.appendChild(nTextQuantity);
    }
}


// ---------------------------------------------


const extractCategory = employee => employee.categoria;
const categoriesWithRepeates = employees.map(extractCategory);

const categoriesWithoutRepeats = calculateUniqueCategories(categoriesWithRepeates);
console.log(categoriesWithoutRepeats)
// fillCategoriesDropdown( ... ['gato', 'perro', 'hamster', 'camaleón']);
/* operador spread */
fillCategoriesDropdown( ... categoriesWithoutRepeats);


// function calculateUniqueCategories(repeats){
//     const uniques = [];

//     ext: for(const category of repeats){
//         for(const category2 of uniques){
//             if(category === category2){
//                 continue ext;
//             }
//         }
//         uniques.push(category);
//     }

// }

function calculateUniqueCategories(repeates){
    const uniques = new Set(repeates);
    return Array.from(uniques);

}


// ... rest
function fillCategoriesDropdown( ... categories){
    const nSelect = document.getElementById('tSelCategories');

    categories.forEach(category => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', category);

        const nText = document.createTextNode(category);
        nOption.appendChild(nText);
    });

}

function fillEmployeesList(){
    const nOl = document.getElementById('tOLEmployees');
    const employees = datosEmpresa;
    
    for(const { nombre: firstname, apellido: lastname} of employees){
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);
        
        const nText = document.createTextNode(`${firstname} ${lastname}`);
        nLi.appendChild(nText);
    }
}

fillEmployeesList();
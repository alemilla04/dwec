import { datosEmpresa as employees } from "./datos_empresa (1).js";

function showManagerQuantity() {
    const isManager = ({ categoria: category }) => category === "gerente";

    const quantity = employees.filter(isManager).length; 
    console.log(quantity);
}

showManagerQuantity();


function showSortedBlondeDevelopersFullName() {
    const isDeveloper = ({ categoria: category}) => category === "informatico";
    const isBlonde = ({ colorPelo: hairColor}) => hairColor === "rubio";
    const getSurnameAndName = employee => `${employee.apellido}, ${employee.nombre}`;

    const people = employees.filter(isDeveloper).filter(isBlonde).map(getSurnameAndName).sort();

    console.table(people);
}

showSortedBlondeDevelopersFullName();
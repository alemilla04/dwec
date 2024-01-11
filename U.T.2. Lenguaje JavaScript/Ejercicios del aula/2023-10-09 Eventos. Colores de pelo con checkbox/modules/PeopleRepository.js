import { datosEmpresa as employees } from "./datos_empresa (1).js";

export class PeopleRepository {
    getHairColors() {
        const extractHairColor = employee => employee.colorPelo;

        return Array.from(new Set(employees.map(extractHairColor)));
    }

    getPeopleByHairColor(color) {
        return employees.filter(employee => employee.colorPelo === color)
        ;
    }
}
export default class ThermomixService {
    static URL_BASE = 'http://127.0.0.1/thermomix/controlador.php?'

    async getBooks() {
        const url = ThermomixService.URL_BASE + 'operacion=obtener_libros';
        const response = await fetch(url);
        const data = await response.json();
        const books = data.libros;
        return books;
    }

    async getDishesById(id) {
        const url = ThermomixService.URL_BASE + 'operacion=obtener_platos&libro=' + id;
        const response = await fetch(url);
        const data = await response.json();
        return data.platos;
    }

    async getRecipeById(id) {
        const url = ThermomixService.URL_BASE + 'operacion=obtener_receta&plato=' + id;
        const response = await fetch(url);
        const data = await response.json();
        return data.receta;
    }
}
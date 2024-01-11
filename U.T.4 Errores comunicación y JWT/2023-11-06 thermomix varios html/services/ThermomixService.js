export default class ThermomixService{
    static URL_BASE = "http://127.0.0.1:8080/controlador.php?operacion=";

    async getBooks(){
        const url = ThermomixService.URL_BASE+"obtener_libros";
        
        const response = await fetch(url);
        const data = await response.json();
        return data.libros;
    
    }
    
    async getDishesByBook(bookId){
        const url = ThermomixService.URL_BASE+"obtener_platos&libro="+bookId;

        const response = await fetch(url);
        const data = await response.json();
        return data.platos;
    }
    
    async getRecipebyDish(dishId){
        const url = ThermomixService.URL_BASE+"obtener_receta&plato="+dishId;

        const response = await fetch(url);
        const data = await response.json();
        return data.receta;
    }

    async getDishes(){
        const books = await this.getBooks();
        
        // let allDishes = [];
        // for(const book of books){
        //     const dishes = await this.getDishesByBook(book.clave);
        //     allDishes.push(...dishes);
        // };

        const allDishes = await Promise.all(
            books.map(({clave}) => this.getDishesByBook(clave))
        );

        return  allDishes.flat();
    }



}
export default class ShopService {
    static URL_BASE = 'http://10.88.72.234:8080/rest/';

    async getProducts() {
        const url = ShopService.URL_BASE + 'products.php';
        const response = await fetch(url);
        const data = await response.json();
        return data.products;
    }

    async getProductByCategory(categoryId){
        const products = this.getProducts();
        products.filter(({category_id}) => category_id === categoryId);
    }
}
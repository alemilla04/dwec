import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';
import { ProductT } from './hardwaresolutions-mock.service';
import { CategoryT } from './hardwaresolutions-mock.service';

@Injectable({
  providedIn: 'root'
})
export class HardwaresolutionsRestService {

  constructor(private _http: HttpClient) {}

  // public getProducts$(): Observable<ProductT[]>{
  
  // }

  public getCategories$(): Observable<CategoryT[]> {
    const url = "http://127.0.0.1:8080/rest/categories.php";
    return this._http.get(url).pipe(
      //@ts-ignore
      map(response=>response.categories),
      //@ts-ignore
      map(categories => categories.map(category=>({
        id: category.category_id,
        name: category.category_name,
      })))
    );
  }

  public getProductById$(productId: number): Observable<ProductT>{
    const url = `http:127.0.0.1:8080/rest/products.php?product_id=${productId}`;
    //@ts-ignore
    return this._http.get(url).pipe(
      //@ts-ignore
      map(data=>data.product),
      map(product=>({
        id: product.product_id,
        name: product.product_name,
        description: product.description,
        cost: product.standard_cost,
        price: product.list_price,
        categoryId: product.category_id,
      })), delay(3000),
    );
  }
}

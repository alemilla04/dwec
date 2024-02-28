import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductT } from '../entities/product-t';
import { CategoryT } from '../entities/category-t';

@Injectable({
  providedIn: 'root'
})
export class HardwaresolutionsService {

  constructor(private _http:HttpClient) { }

  public getProducts$(): Observable<ProductT[]>{
    const url = "http://127.0.0.1:8080/rest/products.php";
    return this._http.get(url).pipe(
      //@ts-ignore
      map(response => response.products),
      //@ts-ignore
      map(products => products.map(product => ({
        id: parseInt(product.product_id),
        name: product.product_name,
        description: product.description,
        cost: parseInt(product.standard_cost),
        price: parseInt(product.list_price),
        categoryId: parseInt(product.category_id),
      })))
    );
  }

  public getCategories$(): Observable<CategoryT[]>{
    const url = "http://127.0.0.1:8080/rest/categories.php";
    return this._http.get(url).pipe(
      //@ts-ignore
      map(response => response.categories),
      //@ts-ignore
      map(categories => categories.map(category => ({
        id: parseInt(category.category_id),
        name: category.category_name,
      })))
    );
  }

  public getProductById$(id: number): Observable<ProductT>{
    const url = `http://127.0.0.1:8080/rest/products.php?product_id=${id}`;
    return this._http.get(url).pipe(
      //@ts-ignore
      map(response => response.product),
      map(product => ({
        id: parseInt(product.product_id),
        name: product.product_name,
        description: product.description,
        cost: parseInt(product.standard_cost),
        price: parseInt(product.list_price),
        categoryId: parseInt(product.category_id),
      })),
    );
  }

  public getCategoryById$(categoryId: number):Observable<CategoryT>{
    const categories$ = this.getCategories$();
    //@ts-ignore
    return categories$.pipe(
      map(categories => categories.map(category => ({
        id: category.id,
        name: category.name,
      })).find(category => category.id === categoryId)),
    );
  }
}

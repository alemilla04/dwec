import { Injectable } from '@angular/core';
import { products } from './products';
import { Observable, map, of } from 'rxjs';

export type ProductT = {
  id: number,
  name: string,
  description: string,
  cost: number,
  price: number,
  categoryId: number,
}

@Injectable({
  providedIn: 'root'
})
export class HardwaresolutionsMockService {

  constructor() { }

  public getProducts$(): Observable<ProductT[]>{
    return of(
      products.map(product => ({
        id: parseInt(product.product_id),
        name: product.product_name,
        description: product.description,
        cost: parseInt(product.standard_cost),
        price: parseInt(product.list_price),
        categoryId: parseInt(product.category_id),
      }))
    );
  }

  public getProductById$(productId: number): Observable<ProductT>{
    const product = products.map(product => ({
      id: parseInt(product.product_id),
      name: product.product_name,
      description: product.description,
      cost: parseInt(product.standard_cost),
      price: parseInt(product.list_price),
      categoryId: parseInt(product.category_id),
    })).find(product => product.id === productId); 
    //@ts-ignore
    return of(product);   
  }
}

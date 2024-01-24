import { Injectable } from '@angular/core';
import { datos, ProductoT } from './datos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  public recuperarProductos(): ProductoT[] {
    return datos;
  }

  public recuperarProductoPorId(id_param: number): ProductoT | undefined{
    return datos.find(producto => producto.id === id_param);
  }
}

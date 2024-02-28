import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductT } from '../../entities/product-t';
import { HardwaresolutionsService } from '../../services/hardwaresolutions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'select-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-products.component.html',
  styleUrl: './select-products.component.css'
})
export class SelectProductsComponent {
  products$: Observable<ProductT[]>;

  constructor(private _service: HardwaresolutionsService, private _router: Router){
    this.products$ = this._service.getProducts$();
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
//@ts-ignore
  gotoProduct(e){
    const productId = e.target.value;
    this._router.navigate(['/products/', productId]);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HardwaresolutionsMockService, ProductT } from '../../services/hardwaresolutions-mock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'select-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './select-products.component.html',
  styleUrl: './select-products.component.css'
})
export class SelectProductsComponent {
  products$: Observable<ProductT[]>;

  constructor(
    private _service: HardwaresolutionsMockService,
    private _router: Router) {
    this.products$ = this._service.getProducts$();
  }
  //@ts-ignore
  public gotoProduct(e){
    const productId = e.target.value;
    this._router.navigate(['/products/', productId]);
  }
}

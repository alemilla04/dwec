import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HardwaresolutionsService } from '../../services/hardwaresolutions.service';
import { Observable } from 'rxjs';
import { ProductT } from '../../entities/product-t';

@Component({
  selector: 'table-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.css'
})
export class TableProductsComponent {
  products$: Observable<ProductT[]>;
  constructor(private _service: HardwaresolutionsService){
    this.products$ = this._service.getProducts$();
  }
}

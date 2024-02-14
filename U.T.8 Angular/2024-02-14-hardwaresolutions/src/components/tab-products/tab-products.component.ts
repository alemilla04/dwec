import { Component } from '@angular/core';
import { TableProductsComponent } from '../table-products/table-products.component';
import { SelectProductsComponent } from '../select-products/select-products.component';

@Component({
  selector: 'tab-products',
  standalone: true,
  imports: [TableProductsComponent, SelectProductsComponent],
  templateUrl: './tab-products.component.html',
  styleUrl: './tab-products.component.css'
})
export class TabProductsComponent {

}

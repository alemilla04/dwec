import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TabProductsComponent } from '../components/tab-products/tab-products.component';
import { TableProductsComponent } from '../components/table-products/table-products.component';
import { RadCategoriesComponent } from '../components/rad-categories/rad-categories.component';
import { DetailsProductComponent } from '../components/details-product/details-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabProductsComponent, RouterLink, RadCategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2024-02-26-hardware-solutions';
}

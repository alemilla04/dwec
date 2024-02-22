import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TabProductsComponent } from '../components/tab-products/tab-products.component';
import { CardProductComponent } from '../components/card-product/card-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //routerLink para que el link funcione en app.component
  imports: [CommonModule, RouterOutlet, TabProductsComponent, RouterLink, CardProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2024-02-14-hardwaresolutions';
}

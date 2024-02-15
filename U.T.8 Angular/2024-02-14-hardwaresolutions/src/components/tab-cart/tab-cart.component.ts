import { Component } from '@angular/core';
import { RadiosCategoriesComponent } from '../radios-categories/radios-categories.component';

@Component({
  selector: 'tab-cart',
  standalone: true,
  imports: [RadiosCategoriesComponent],
  templateUrl: './tab-cart.component.html',
  styleUrl: './tab-cart.component.css'
})
export class TabCartComponent {

}

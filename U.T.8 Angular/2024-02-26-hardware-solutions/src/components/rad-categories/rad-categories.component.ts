import { Component } from '@angular/core';
import { RadioCategoriesComponent } from '../radio-categories/radio-categories.component';

@Component({
  selector: 'rad-categories',
  standalone: true,
  imports: [RadioCategoriesComponent],
  templateUrl: './rad-categories.component.html',
  styleUrl: './rad-categories.component.css'
})
export class RadCategoriesComponent {

}

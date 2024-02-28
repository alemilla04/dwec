import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryT } from '../../entities/category-t';
import { HardwaresolutionsService } from '../../services/hardwaresolutions.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'radio-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-categories.component.html',
  styleUrl: './radio-categories.component.css'
})
export class RadioCategoriesComponent {
  categories$: Observable<CategoryT[]>;

  constructor(private _service: HardwaresolutionsService, private _router: Router){
    this.categories$ = this._service.getCategories$();
  }
  //@ts-ignore
  gotoProducts(e){
    const categoryId = e.target.value;
    this._router.navigate(['/categories/',categoryId, 'products']);
  }
}

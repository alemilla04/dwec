import { Component } from '@angular/core';
import { HardwaresolutionsRestService } from '../../services/hardwaresolutions-rest.service';
import { Observable } from 'rxjs';
import { ProductT } from '../../services/hardwaresolutions-mock.service';

@Component({
  selector: 'tab-categories',
  standalone: true,
  imports: [],
  templateUrl: './tab-categories.component.html',
  styleUrl: './tab-categories.component.css'
})
export class TabCategoriesComponent {
  categories = Observable<ProductT>;
  constructor(private _service: HardwaresolutionsRestService) {
    this.categories = this._service.getCategories$();
  }
}

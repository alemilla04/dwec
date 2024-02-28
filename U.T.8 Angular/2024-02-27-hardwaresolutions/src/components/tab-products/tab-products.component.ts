import { Component, OnInit } from '@angular/core';
import { SelectProductsComponent } from '../select-products/select-products.component';
import { HardwaresolutionsService } from '../../services/hardwaresolutions.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tab-products',
  standalone: true,
  imports: [SelectProductsComponent, CommonModule],
  templateUrl: './tab-products.component.html',
  styleUrl: './tab-products.component.css'
})
export class TabProductsComponent implements OnInit{
  categoryName = "";

  constructor(private _service: HardwaresolutionsService, private _route: ActivatedRoute){}

  ngOnInit(): void {
    //@ts-ignore
    const categoryId = parseInt(this._route.snapshot.paramMap.get("categoryId"));
    if(categoryId!=null){
      this._service.getCategoriesById$(categoryId).subscribe(category => this.categoryName = category.name);
    }
  }
}

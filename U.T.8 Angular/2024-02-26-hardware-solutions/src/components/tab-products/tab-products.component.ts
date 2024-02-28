import { Component, OnInit } from '@angular/core';
import { TableProductsComponent } from '../table-products/table-products.component';
import { SelectProductsComponent } from '../select-products/select-products.component';
import { Observable } from 'rxjs';
import { CategoryT } from '../../entities/category-t';
import { HardwaresolutionsService } from '../../services/hardwaresolutions.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tab-products',
  standalone: true,
  imports: [TableProductsComponent, SelectProductsComponent, CommonModule],
  templateUrl: './tab-products.component.html',
  styleUrl: './tab-products.component.css'
})
export class TabProductsComponent implements OnInit{
  categoryName = "";

  constructor(private _service: HardwaresolutionsService, private _route: ActivatedRoute){
  }

  ngOnInit(): void {
    //@ts-ignore
    const categoryId = parseInt(this._route.snapshot.paramMap.get("categoryId"));
    if(categoryId!=null){
      this._service.getCategoryById$(categoryId).subscribe(category => this.categoryName = category.name);
    }
  }
}

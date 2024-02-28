import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductT } from '../../entities/product-t';
import { HardwaresolutionsService } from '../../services/hardwaresolutions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.css'
})
export class DetailsProductComponent implements OnInit{
  product$: Observable<ProductT> = {} as Observable<ProductT>;

  constructor(private _service: HardwaresolutionsService,
    private _route: ActivatedRoute,
    private _router: Router){
      this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
  ngOnInit(): void {
    //@ts-ignore
    const productId = parseInt(this._route.snapshot.paramMap.get("id"));
    this.product$ = this._service.getProductById$(productId);
  }
}

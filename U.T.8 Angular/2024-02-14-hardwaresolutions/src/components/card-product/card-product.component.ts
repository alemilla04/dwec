import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HardwaresolutionsRestService } from '../../services/hardwaresolutions-rest.service';
import { Observable } from 'rxjs';
import { ProductT } from '../../services/hardwaresolutions-mock.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent implements OnInit {
  product$: Observable<ProductT> = {} as Observable<ProductT>; 

  private _productId: number = 1;
  @Input('product') set productId(value:string){
    this._productId = parseInt(value);
  }

  @Output('productLoaded') private productLoadedEmitter = new EventEmitter<number>();

  constructor(private _service: HardwaresolutionsRestService) {
  }

  ngOnInit(): void {
    this.product$ = this._service.getProductById$(this._productId);
    this.product$.subscribe(_ => this.productLoadedEmitter.emit(this._productId));
  }
}

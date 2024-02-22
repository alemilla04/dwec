import { Component } from '@angular/core';
import { CardProductComponent } from "../card-product/card-product.component";
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerWaitingComponent } from '../spinner-waiting/spinner-waiting.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tab-card-product',
    standalone: true,
    templateUrl: './tab-card-product.component.html',
    styleUrl: './tab-card-product.component.css',
    imports: [CardProductComponent, SpinnerWaitingComponent, CommonModule]
})
export class TabCardProductComponent {
  //@ts-ignore
  productId: string;
  showSpinner = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) {
      this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      //@ts-ignore
      this.productId = this._route.snapshot.paramMap.get('idProduct');
  }

  //@ts-ignore
  hideSpinner(e){
    this.showSpinner = false;
  }

  //@ts-ignore
  gotoProduct(e) {
    const productId = e.target.value;
    this._router.navigate(['/card-product/', productId]);
  }
}

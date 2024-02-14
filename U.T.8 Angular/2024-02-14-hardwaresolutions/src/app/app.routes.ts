import { Routes } from '@angular/router';
import { TabProductsComponent } from '../components/tab-products/tab-products.component';
import { DetailProductComponent } from '../components/detail-product/detail-product.component';

export const routes: Routes = [
    { path: 'products', component: TabProductsComponent },
    { path: 'products/:id', component:  DetailProductComponent},
];

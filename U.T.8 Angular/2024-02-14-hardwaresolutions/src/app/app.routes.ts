import { Routes } from '@angular/router';
import { TabProductsComponent } from '../components/tab-products/tab-products.component';
import { DetailProductComponent } from '../components/detail-product/detail-product.component';
import { TabCartComponent } from '../components/tab-cart/tab-cart.component';
import { TabCategoriesComponent } from '../components/tab-categories/tab-categories.component';
import { CardProductComponent } from '../components/card-product/card-product.component';
import { TabCardProductComponent } from '../components/tab-card-product/tab-card-product.component';

export const routes: Routes = [
    { path: 'products', component: TabProductsComponent },
    { path: 'products/:id', component:  DetailProductComponent},
    { path: 'cart', component: TabCartComponent},
    { path: 'categories/:idCategory/products', component: TabProductsComponent},
    { path: 'categories', component: TabCategoriesComponent},
    { path: 'card-product/:idProduct', component: TabCardProductComponent},
];

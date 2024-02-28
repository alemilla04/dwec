import { Routes } from '@angular/router';
import { TabProductsComponent } from '../components/tab-products/tab-products.component';
import { RadCategoriesComponent } from '../components/rad-categories/rad-categories.component';
import { DetailsProductComponent } from '../components/details-product/details-product.component';

export const routes: Routes = [
    { path:'products', component: TabProductsComponent},
    { path:'products/:id', component: DetailsProductComponent},
    { path: 'categories', component: RadCategoriesComponent},
    { path: 'categories/:categoryId/products', component: TabProductsComponent}
];

import { Routes } from '@angular/router';
import { ListaPokemonsComponent } from '../components/lista-pokemons/lista-pokemons.component';
import { DetailsPokemonsComponent } from '../components/details-pokemons/details-pokemons.component';

export const routes: Routes = [
    { path: 'pokemons/:id', component: DetailsPokemonsComponent}
];

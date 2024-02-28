import { Routes } from '@angular/router';
import { MiPokemonComponent } from '../mi-pokemon/mi-pokemon.component';

export const routes: Routes = [
    {path: 'pokemon/:id', component: MiPokemonComponent}
];

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService, PokemonT } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lista-pokemons',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-pokemons.component.html',
  styleUrl: './lista-pokemons.component.css'
})
export class ListaPokemonsComponent {

  pokemons$: Observable<PokemonT[]>;

  constructor(private _service: PokemonService){
    this.pokemons$ = this._service.getPokemons$();
  }
}

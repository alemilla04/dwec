import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonT } from '../../entities/pokemon-t';
import { PokemonsService } from '../../services/pokemons.service';
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

  constructor(private _service: PokemonsService){
    this.pokemons$ = this._service.getPokemons$();
  }
}

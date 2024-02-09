import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-pokemons.component.html',
  styleUrl: './select-pokemons.component.css'
})
export class SelectPokemonsComponent {
  //@ts-ignore
  pokemons$: Observable<number[]>;

  constructor(private _service: PokemonsService) {
    this.pokemons$ = this._service.getPokemons$();
  }
}

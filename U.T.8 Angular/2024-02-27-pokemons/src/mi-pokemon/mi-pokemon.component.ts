import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService, PokemonT } from '../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mi-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-pokemon.component.html',
  styleUrl: './mi-pokemon.component.css'
})
export class MiPokemonComponent {

  //@ts-ignore
  pokemon$: Observable<PokemonT>;

  constructor (private _route: ActivatedRoute, private _service: PokemonService, private _router: Router){
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    //@ts-ignore
    const pokemonId = parseInt(this._route.snapshot.paramMap.get('id'));
    this.pokemon$ = this._service.getPokemon$(pokemonId);
  }


}

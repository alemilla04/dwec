import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-card-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.css'
})
export class CardPokemonComponent {
  //Como leemos el parámetro de la ruta: 
  //inyectamos el objeto ActivatedRoute
  //Angular a veces reusa componentes, por eso la segunda vez falla
  pokemon$: Observable<Pokemon>;
  constructor(private _route: ActivatedRoute, 
    private _router: Router, 
    private _service: PokemonsService) {
    //Aunque esté deprecado, aquí no sabemos si era necesario. Hay que buscar el
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;

    //Esta es la forma de leer el parámetro de la ruta
    //@ts-ignore
    const pokemonId = parseInt(this._route.snapshot.paramMap.get('id'));
    //@ts-ignore
    this.pokemon$ = this._service.getPokemonById$(pokemonId);
  }
}

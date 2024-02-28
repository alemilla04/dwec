import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonT } from '../../entities/pokemon-t';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'details-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-pokemons.component.html',
  styleUrl: './details-pokemons.component.css'
})
export class DetailsPokemonsComponent implements OnInit{
  pokemon$: Observable<PokemonT> = {} as Observable<PokemonT>;
  
  constructor(private _service: PokemonsService,
    private _router: Router, private _route: ActivatedRoute){
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    //@ts-ignore
    const pokemonId = parseInt(this._route.snapshot.paramMap.get("id"));
    this.pokemon$ = this._service.getPokemonById$(pokemonId);
  }


}

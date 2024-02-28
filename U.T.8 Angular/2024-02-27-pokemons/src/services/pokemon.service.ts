import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export type PokemonT = {
  id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) { }

  getPokemons$(): Observable<PokemonT[]>{
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    return this._http.get(url).pipe(
      //@ts-ignore
      map(response => response.results),
      //@ts-ignore
      map(pokemons => pokemons.map(pokemon => ({id: parseInt(pokemon.url.split('/')[6]), name: pokemon.name})))
    );
  }

  getPokemon$(id: number): Observable<PokemonT>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    //@ts-ignore
    return this._http.get(url);
  }
}

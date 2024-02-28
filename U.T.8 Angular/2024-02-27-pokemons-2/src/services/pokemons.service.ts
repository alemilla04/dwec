import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonT } from '../entities/pokemon-t';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private _http:HttpClient) { }

  public getPokemons$(): Observable<PokemonT[]> {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    return this._http.get(url).pipe(
      //@ts-ignore
      map(response=>response.results),
      //@ts-ignore
      map(pokemons => pokemons.map(pokemon => ({
        id: parseInt(pokemon.url.split("/")[6]),
        name: pokemon.name,
      })))
    );
  }

  public getPokemonById$(pokemonId: number): Observable<PokemonT>{
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
    //@ts-ignore
    return this._http.get(url);
  }
}

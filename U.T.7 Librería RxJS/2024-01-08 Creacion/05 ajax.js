import { ajax } from 'rxjs/ajax';
import { map, mergeMap, take, delay } from 'rxjs/operators';
import XMLHttpRequest from 'xhr2';

const url = 'https://pokeapi.co/api/v2/pokemon/';

const extractData = todo => todo.response;
const extractPokemons = data => data.results;
const extractName = pokemon => pokemon.name;

const pokemons$ = ajax ({
    url,
    createXHR: () => new XMLHttpRequest(),
    method: 'get',
    responseType: 'json',
    crossDemain: true,
    withCredentials: false
}).pipe(
    map(extractData),
    map(extractPokemons),
    mergeMap(pokemons => pokemons),
    take(5), 
    map(extractName)
);

pokemons$.subscribe(console.log);
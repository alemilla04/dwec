import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { GameT, GamesT } from '../../entities/GameT';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'game-service',
  standalone: true,
  imports: [],
  templateUrl: './game-service.component.html',
  styleUrl: './game-service.component.css'
})
export class GameServiceComponent {
  constructor(private _http:HttpClient){}
  //@ts-ignore
  public getGames$(): Observable<GamesT[]> {
    const url = "http://127.0.0.1:3000/games";
    //@ts-ignore
    return this._http.get(url).pipe(
      /* response = recupero lo que me devuelve el endpoint.
        response.game = el response tiene tres propiedades{ok, date, y el array de games},
        por eso le pongo el .games.
        el segundo mapeo es agarrar games, hacerle un tercer mapeo a games para transformarlo
        a un nuevo array, donde game es cada elemento de games.
        Entonces, a game le hago una deconstruccion para solamente obtener el id y title.
      */
     //@ts-ignore
      map(response=>response.games),
      //@ts-ignore
      map(games=> games.map(game => ({
        id: game.id,
        title: game.title,
      })))
    );
  }

  public getGameById$(gameId: string):Observable<GameT>{
    const url = `http://127.0.0.1:3000/game/${gameId}`;
    //@ts-ignore
    return this._http.get(url).pipe(
      //@ts-ignore
      map(response=>response.game),
      //@ts-ignore
      /*podría decirse el codigo de la izquierda hace una deconstruccion
      con alias del objeto game, el cod de la derecha crea el tipo GameT*/
      map(({id, title, thumbnail:image, release_date: releaseDate}) => ({id, title, image: `http://127.0.0.1:3000${image}`, releaseDate})),
      delay(300)
    );
  }
}

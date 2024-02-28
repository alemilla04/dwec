import { Component } from '@angular/core';
import { GameServiceComponent } from '../../services/game-service/game-service.component';
import { Observable } from 'rxjs';
import { GameT, GamesT } from '../../entities/GameT';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'table-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-games.component.html',
  styleUrl: './table-games.component.css'
})
export class TableGamesComponent {
  // game$: Observable<GameT> = {} as Observable<GameT>;
  games$: Observable<GamesT[]>;

  constructor(private _service:GameServiceComponent){
    // this.game$ = this._service.getGameById$("bb23224d-b0bf-4eb6-9987-e935c8cd92ec");
    this.games$ = this._service.getGames$();
  }
}

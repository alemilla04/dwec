import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameT } from '../entities/game.type';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'card-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-game.component.html',
  styleUrl: './card-game.component.css'
})
export class CardGameComponent implements OnInit{
  @Input('game') public game: string = "";
  //@ts-ignore
  game$: Observable<GameT>;

  constructor(private _service: GamesService) {
  } 
  ngOnInit(): void {
    this.game$ = this._service.getGameById$(this.game);
  }

}

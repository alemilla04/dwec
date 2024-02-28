import { Component } from '@angular/core';
import { TableGamesComponent } from '../table-games/table-games.component';

@Component({
  selector: 'tab-games',
  standalone: true,
  imports: [TableGamesComponent],
  templateUrl: './tab-games.component.html',
  styleUrl: './tab-games.component.css'
})
export class TabGamesComponent {

}

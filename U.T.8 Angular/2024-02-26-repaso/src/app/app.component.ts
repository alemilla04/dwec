import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabGamesComponent } from '../components/tab-games/tab-games.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabGamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2024-02-26-repaso';
}

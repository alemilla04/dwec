import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeasonOfYearComponent } from '../components/season-of-year/season-of-year.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SeasonOfYearComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2024-02-27-atributos';
}

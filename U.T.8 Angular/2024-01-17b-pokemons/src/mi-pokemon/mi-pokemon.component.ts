import { Component } from '@angular/core';

@Component({
  selector: 'mi-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './mi-pokemon.component.html',
  styleUrl: './mi-pokemon.component.css'
})
export class MiPokemonComponent {
  name: string = 'Bulbasaur';
  image: string = 'assets/images/bulbasaur.png';
  height: number = 87;
  weight: number = 114;
}

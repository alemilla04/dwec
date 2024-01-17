import { Component } from '@angular/core';

@Component({
  selector: 'mi-dinosaurio',
  standalone: true,
  imports: [],
  templateUrl: './mi-dinosaurio.component.html',
  styleUrl: './mi-dinosaurio.component.css'
})
export class MiDinosaurioComponent {
  name: string = 'Tiranosaurio Rex';
  class: string = 'carnivoro';
  age: number = 9;
  image: string = '/assets/images/dinosaurio.png';
}

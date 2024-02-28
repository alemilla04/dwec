import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiOrdenadorComponent } from '../mi-ordenador/mi-ordenador.component';
import { ListaPokemonsComponent } from '../lista-pokemons/lista-pokemons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MiOrdenadorComponent, ListaPokemonsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicioApi';

  mostrarMensajePorConsola(e: any){
    console.log(e);
  }

  mostrarMemoriaPrincipalPorConsola(e:number){
    console.log(e);
  }
}

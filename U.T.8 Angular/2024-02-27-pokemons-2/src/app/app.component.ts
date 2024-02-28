import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPokemonsComponent } from '../components/lista-pokemons/lista-pokemons.component';
import { MiOrdenadorComponent } from '../components/mi-ordenador/mi-ordenador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaPokemonsComponent, MiOrdenadorComponent],
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

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from '../components/prueba/prueba.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PruebaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2024-02-28-eventos-per';
  mensajeRecibido = "";
  //@ts-ignore
  mostrarMensaje(e){
    this.mensajeRecibido = e;
  }
  
}

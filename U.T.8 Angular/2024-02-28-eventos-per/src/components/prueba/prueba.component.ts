import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'prueba',
  standalone: true,
  imports: [],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {
  @Output('mensaje') mensajeEmitter = new EventEmitter<string>();
  //@ts-ignore
  definirMensaje(e){
    this.mensajeEmitter.emit('Por favor quiero pito.');
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'mi-etiqueta',
  standalone: true,
  imports: [],
  templateUrl: './mi-etiqueta.component.html',
  styleUrl: './mi-etiqueta.component.css'
})
export class MiEtiquetaComponent {
  @Input('mensaje') mensajeRecibido: string = '';
}

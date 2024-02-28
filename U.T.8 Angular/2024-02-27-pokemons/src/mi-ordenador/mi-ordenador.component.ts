import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mi-ordenador',
  standalone: true,
  imports: [],
  templateUrl: './mi-ordenador.component.html',
  styleUrl: './mi-ordenador.component.css'
})
export class MiOrdenadorComponent {
  //esto es para los atributos
  @Input() plataforma: string = '';
  @Input("memoria-principal") memoriaPrincipal: string = '';
  @Input("memoria-secundaria") memoriaSecundaria: string = '';

  @Output('componentecargado') componenteCargadoEmitter = new EventEmitter<string>();
  @Output('memoriaprincipalinformada') memoriaPrincipalInformadaEmitter = new EventEmitter<number>();


  constructor() {
    setTimeout(
      () => this.componenteCargadoEmitter.emit('Hola ya estoy cargado. Soy '+ this.plataforma)
      , 5000
    )
  }

  enviarCantidadMemoriaPrincipal(e: any){
    this.memoriaPrincipalInformadaEmitter.emit(parseInt(this.memoriaPrincipal));
  }

  


}

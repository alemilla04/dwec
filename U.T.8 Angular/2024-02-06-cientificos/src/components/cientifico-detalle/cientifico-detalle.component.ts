import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CientificosService } from '../../services/cientificos.service';
import { Observable } from 'rxjs';
import { Cientifico } from '../../entities/cientifico';

@Component({
  selector: 'cientifico-detalle',
  standalone: true,
  imports: [],
  templateUrl: './cientifico-detalle.component.html',
  styleUrl: './cientifico-detalle.component.css'
})
export class CientificoDetalleComponent {
  cientifico$: Observable<Cientifico>;
  
  constructor(private _service: CientificosService) {}
}

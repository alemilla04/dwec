import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FichaContactosComponent } from '../components/ficha-contactos/ficha-contactos.component';
import { FichaInicioComponent } from '../components/ficha-inicio/ficha-inicio.component';
import { FichaServiciosComponent } from '../components/ficha-servicios/ficha-servicios.component';
import { FichaProductosComponent } from '../components/ficha-productos/ficha-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FichaContactosComponent, FichaInicioComponent, FichaServiciosComponent, FichaProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2024-02-05-enrutamiento';
}

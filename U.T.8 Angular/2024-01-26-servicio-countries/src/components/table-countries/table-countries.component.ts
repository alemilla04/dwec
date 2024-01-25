import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'table-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-countries.component.html',
  styleUrl: './table-countries.component.css'
})
export class TableCountriesComponent {
  public countries: any;

  constructor(private _service: CountriesService) {
    this.countries = this._service.retrieveCountries();
  }
}

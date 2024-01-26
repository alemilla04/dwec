import { Component } from '@angular/core';
import { CountriesService, CountryT } from '../../services/countries.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'table-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-countries.component.html',
  styleUrl: './table-countries.component.css'
})
export class TableCountriesComponent {
  public countries$: Observable<Array<CountryT>>;

  constructor(private _service: CountriesService){ 
    this.countries$ = this._service.retrieveCountries$();
  }


  // public countries: Array<CountryT> = [];
  //el servicio se injecta en el constructor
    /*el subscribe es como el den y al darle uso recupero los datos, en este caso, 
      el array de paises*/
    //@ts-ignore
    // const subscribe = this._service.retrieveCountries$().subscribe({
    //   next: countries => this.countries = countries, 
    //   error: console.error,
    //   complete: () => subscribe.unsubscribe(),
    // });
}

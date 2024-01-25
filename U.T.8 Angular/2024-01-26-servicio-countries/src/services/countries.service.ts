import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http: HttpClient) { }

  public retrieveCountries(): any{
    const url = 'https://restcountries.com/v3.1/all';
    const countries = this._http.get(url);
    return countries;
  }
}

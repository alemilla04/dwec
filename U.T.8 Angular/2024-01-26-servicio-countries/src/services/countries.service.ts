import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _http: HttpClient) { }

  public retrieveCountries(): Observable<Object>{
    const url = 'https://restcountries.com/v3.1/all';
    const countries = this._http.get(url);
    return countries;
  }
}

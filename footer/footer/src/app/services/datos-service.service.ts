import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class DatosService {
  urlBase: string;

  constructor(private http: HttpClient) {
    this.urlBase = 'https://restcountries.com/v3.1/all';
  }

  obtenerPaises() {
    return this.http.get(this.urlBase);
  }
}
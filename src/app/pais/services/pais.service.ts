import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set('fields', 'flags,name,capital,population,cca2');
  }

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  buscarPaisPorCapital(termino: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  buscarPaisPorCodigo(codigo: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/alpha/${codigo}`;
    return this.http.get<Pais[]>(url);
  }

  buscarPaisPorRegion(region: string): Observable<Pais[]> {
    const url = `${this._apiUrl}/region/${region}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }
}

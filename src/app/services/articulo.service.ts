import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from '../global';
import { Articulo } from '../models/articulo'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  
  private url: string;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })



  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getArticulos(): Observable<Articulo[]> {
    return this.http.get(this.url + 'articulos').pipe(
      map(response => response as Articulo[])
    );
  }

  getArticulo(id: number): Observable<Articulo> {
    return this.http.get<Articulo>(`${this.url + 'articulo'}/${id}`)
  }

  create(articulo: Articulo): Observable<Articulo> {

    return this.http.post<Articulo>(this.url + 'articulo', articulo, { headers: this.httpHeaders })
  }

  update(articulo: Articulo): Observable<Articulo> {
    return this.http.put<Articulo>(`${this.url + '/articulo'}/${articulo.id}`, articulo, { headers: this.httpHeaders })
  }

  delete(id: number): Observable<Articulo> {
    return this.http.delete<Articulo>(`${this.url + 'articuloDelete'}/${id}`, { headers: this.httpHeaders })
  }


}

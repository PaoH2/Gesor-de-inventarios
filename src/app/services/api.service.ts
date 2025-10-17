import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Producto {
  ID_Producto: number;
  SKU: string;
  Nombre_Producto: string;
  Descripcion?: string;
  Costo: number;
  Stock_Actual: number;
  Nivel_Minimo_Stock?: number;
  Fecha_Creacion?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL base de tu API. Apunta al servidor Node.js.
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  public getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/productos`);
  }

  getProducto(sku: string): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/productos/sku/${sku}`);
  }

  public crearProducto(nuevoProducto: Partial<Producto>): Observable<any> {
     return this.http.post(`${this.apiUrl}/productos`, nuevoProducto);
  }

  updateProducto(sku: string, data: { Descripcion?: string, Costo: number }): Observable<any> {
    return this.http.put(`${this.apiUrl}/productos/sku/${sku}`, data);
  }
}

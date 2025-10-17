import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto, ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit{

  productos: Producto[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private location: Location
  ){}

  goBack(): void {
    this.location.back(); // Esta simple línea hace toda la magia
  }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.isLoading = true;
    this.error = null;

    this.apiService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'No se pudieron cargar los productos. Intente de nuevo más tarde.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  editarProducto(sku: string): void {
   this.router.navigate(['/productos/editar', sku]);
 }

}

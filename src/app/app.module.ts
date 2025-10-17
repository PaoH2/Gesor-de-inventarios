import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrearProductoComponent } from './screens/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './screens/editar-producto/editar-producto.component';
import { ListaComponent } from './screens/lista/lista.component';
import { HomeComponent } from './screens/home/home.component';
import { NavbarComponent } from './partials/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    ListaComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

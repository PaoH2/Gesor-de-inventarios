import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { CrearProductoComponent } from './screens/crear-producto/crear-producto.component';
import { ListaComponent } from './screens/lista/lista.component';
import { EditarProductoComponent } from './screens/editar-producto/editar-producto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'crear', component: CrearProductoComponent, pathMatch: 'full'},
  { path: 'listap', component: ListaComponent, pathMatch: 'full'},
  {path: 'editarp/:sku', component: EditarProductoComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

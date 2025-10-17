import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  userName: string = 'Super Administrador';
  notificationCount: number = 3;

  // Propiedad para gestionar la visibilidad del menú en móvil (si se implementara un menú lateral)
  isSidenavOpen: boolean = false;

  constructor(){}

  ngOnInit(): void {

  }

}

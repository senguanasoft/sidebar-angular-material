import {Component, computed, input, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
export type MenuItem = {
  icon: string
  label:string
  route:string
}
@Component({
  selector: 'app-custom-sidenav',
  imports: [
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss'
})
export class CustomSidenav {
  collapsed = input();
  profilePicSize = computed(()=>this.collapsed()?'32':'80')


  menuItems = signal<MenuItem[]>([
    {icon: 'home', label: 'Dashboard', route: 'dashboard'},
    {icon: 'style', label: 'Categorias', route: 'categories'},
    {icon: 'branding_watermark', label: 'Marcas', route: 'brands'},
    {icon: 'loyalty', label: 'Productos', route: 'products'},
    {icon: 'settings', label: 'Configuración', route: 'settings'},
    {icon: 'shopping_basket', label: 'Pedidos', route: 'orders'},
  ])
}

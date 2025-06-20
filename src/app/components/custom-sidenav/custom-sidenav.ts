import {Component, computed, input, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MenuItem} from '../menu-item/menu-item';
import {MenuItemList, menuItems} from '../../menu-items';

@Component({
  selector: 'app-custom-sidenav',
  imports: [
    MatListModule,
    MatIconModule,
    RouterModule,
    MenuItem
  ],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss'
})
export class CustomSidenav {
  collapsed = input(false);
  profilePicSize = computed(()=>this.collapsed()?'32':'80')


  menuItems = signal<MenuItemList[]>(menuItems)
}

import {Component, input, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MenuItemList} from '../custom-sidenav/custom-sidenav';
import {trigger, style, transition, animate} from '@angular/animations';
@Component({
  selector: 'app-menu-item',
  imports: [
    MatListModule,
    RouterModule,
    MatIcon
  ],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.scss',
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }),
        animate('500ms ease-in-out', style({ opacity: 1 , height: '*' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 1 , height: '0px' })),
      ])
    ])
  ]
})
export class MenuItem {
  item = input.required<MenuItemList>();
  collapsed = input(false);

  nestedMenuOpen = signal(false);

  toggleNested(){
    if(!this.item().subItems){
      return;
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
    console.log(this.nestedMenuOpen());
  }
}

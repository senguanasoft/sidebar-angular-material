import {Component, computed, effect, input, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {trigger, style, transition, animate} from '@angular/animations';
import {MenuItemList} from '../../menu-items';
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

  routeHistory = input('')
  nestedMenuOpen = signal(false);

  level = computed(()=>this.routeHistory().split('/').length - 1);

  indentation = computed(()=> this.collapsed()? '16px':`${(16+(this.level()*16))}px`);


  logRoutes = effect(()=>{
    console.log(this.routeHistory());
  })

}

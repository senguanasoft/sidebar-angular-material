import {Route, Routes} from '@angular/router';
import {Dashboard} from './pages/dashboard/dashboard';
import {MenuItemList, menuItems} from './menu-items';


const itemToRoute = (i: MenuItemList):Route=>{
  const route = {} as Route;
  if(i.route){
    route.path = i.route;
    route.component = i.component;
  }
    if(i.subItems){
      route.children = i.subItems.map(s => itemToRoute(s))
  }
    return route;
}

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  ...menuItems.map((i)=>itemToRoute(i))
];

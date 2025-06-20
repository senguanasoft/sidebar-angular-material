import {Type} from '@angular/core';
import {Content} from './pages/content/content';
import {Videos} from './pages/content/videos/videos';
import {Dashboard} from './pages/dashboard/dashboard';
import {Shorts} from './pages/content/videos/shorts/shorts';

export type MenuItemList = {
  icon: string
  label:string
  route:string
  subItems?:MenuItemList[]
  component?: Type<unknown>
}


export const menuItems:MenuItemList[]=[
  {icon: 'dashboard', label: 'Dashboard', route: 'dashboard', component: Dashboard},
  {
    icon: 'video_library',
    label: 'Contenido',
    route: 'content',
    component: Content,
    subItems: [
      {
        icon: 'play_circle',
        label: 'Videos',
        route: 'videos',
        component: Videos,
        subItems: [
          {
            icon: 'movie',
            label: 'Shorts',
            route: 'shorts',
            component: Shorts,
          },

        ]
      },
    ]
  },
 // {icon: 'settings', label: 'Configuración', route: 'settings'},
]

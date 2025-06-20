import { Routes } from '@angular/router';
import {Videos} from './pages/content/videos/videos';
import {Dashboard} from './pages/dashboard/dashboard';
import {Content} from './pages/content/content';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'content',
    component: Content,
    children: [
      {
        path: 'videos',
        component: Videos
      }
    ]
  }
];

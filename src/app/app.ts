import {Component, computed, signal} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CustomSidenav} from './components/custom-sidenav/custom-sidenav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIcon,
    MatButtonModule,
    MatSidenavModule,
    CustomSidenav
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  collapsed = signal(false);
  sidenavWidth = computed(()=>this.collapsed()? '65px':'250px');
}

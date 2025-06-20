import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterOutlet],
  template: `
  <h1>Content</h1>
  <router-outlet></router-outlet>
  `,
})
export class Content {

}

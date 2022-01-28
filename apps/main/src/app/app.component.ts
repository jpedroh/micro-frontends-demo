import { Component } from '@angular/core';
// @ts-ignore
import { getUser } from '@micro-frontends-demo/auth'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main';
  // user = getUser()
}

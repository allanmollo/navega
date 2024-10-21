import { Component } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/layout/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'navega';
  showHeader: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((val: any) => {
      if(val instanceof NavigationEnd) {
        if(val.url == '/' || val.url == '/login') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    })
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginFormComponent } from './partial/login-form/login-form.component';
import { BaseMobileCheckComponent } from 'src/app/shared/components/mobile-check/mobile-check.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends BaseMobileCheckComponent implements OnInit, OnDestroy {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.initWindowResizeListener();
  }

  ngOnDestroy(): void {
    this.removeWindowResizeListener();
  }
}

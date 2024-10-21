import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from 'src/app/auth/auth.service';
import { BaseMobileCheckComponent } from 'src/app/shared/components/mobile-check/mobile-check.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent extends BaseMobileCheckComponent implements OnInit, OnDestroy {

  loginForm: UntypedFormGroup = {} as UntypedFormGroup;
  email: string | undefined;
  password: string | undefined;

  authService = inject(AuthService);
  router = inject(Router);

  constructor(
    private fb: UntypedFormBuilder,
  ) {
    super();

  }

  ngOnInit(): void {
    this.initWindowResizeListener();
    this.createForm();
  }

  ngOnDestroy(): void {
    this.removeWindowResizeListener();
  }

  protected createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/home']);
      // this.authService.login(this.loginForm.value)
      //   .subscribe((data: any) => {
      //     if (this.authService.isLoggedIn()) {
      //       this.router.navigate(['/']);
      //     }
      //   });
    }
  }
}

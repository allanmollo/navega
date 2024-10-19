import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseMobileCheckComponent } from 'src/app/shared/components/mobile-check/mobile-check.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

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

  constructor(private fb: UntypedFormBuilder) {
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
}

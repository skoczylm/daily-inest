import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'e1',
  template: `
    <form nz-form class="login-form" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your username!">
          <nz-input-group nzPrefixIcon="user">
            <input type="text" nz-input formControlName="userName" placeholder="Username" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control nzErrorTip="Please input your Password!">
          <nz-input-group nzPrefixIcon="lock">
            <input type="password" nz-input formControlName="password" placeholder="Password" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <label nz-checkbox formControlName="remember">
            <span>Remember me</span>
          </label>
          <a class="login-form-forgot" class="login-form-forgot">Forgot password</a>
          <button nz-button class="login-form-button" [nzType]="'primary'">Log in</button>
          Or
          <a>register now!</a>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  styles: [
    `
      .login-form {
        max-width: 300px;
      }

      .login-form-forgot {
        float: right;
      }

      .login-form-button {
        width: 100%;
      }
    `
  ]
})
export class E1 implements OnInit {
  submitForm(): void {
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }
}
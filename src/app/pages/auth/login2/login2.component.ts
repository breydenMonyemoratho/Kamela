// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator';

@Component({
  selector: 'app-login-2',
  standalone: true,
  imports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    RippleModule,
    AppFloatingConfigurator
  ],
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isAuthenticated = false;
  checked: boolean = false;
  email: string = '';


  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.isAuthenticated = true;
    } else {
      alert('Invalid credentials');
    }
  }
}

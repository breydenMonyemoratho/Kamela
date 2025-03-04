import { Routes } from '@angular/router';
import { Access } from './access';
import { Login } from './login';
import { Error } from './error';
import { LoginComponent } from './login2/login2.component';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    // { path: 'login', component: Login },
    // { path: 'login2', component: LoginComponent }
] as Routes;

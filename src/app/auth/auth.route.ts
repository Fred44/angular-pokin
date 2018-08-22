import { Routes } from '@angular/router';
import { LoginContainer } from './containers/login/login.container';
import { RegisterContainer } from './containers/register/register.container';

export const authRoutes: Routes = [

  {
    path: 'login',
    component: LoginContainer
  },
  {
    path: 'register',
    component: RegisterContainer
  }
];

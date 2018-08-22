import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainer } from './containers/login/login.container';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.route';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UIMaterialModule } from '../ui-material';
import { RegisterContainer } from './containers/register/register.container';
import { AuthShellComponent } from './components/auth-shell/auth-shell.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { AuthGuard } from './services/auth-gard.service';
import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterEffects } from './store/register.effects';
import { AuthInterceptor } from './services/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIMaterialModule,
    AngularFireAuthModule,
    RouterModule.forChild(authRoutes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects, RegisterEffects])
  ],
  declarations: [LoginContainer, AuthNavbarComponent, RegisterContainer, AuthShellComponent],
  providers: [AuthService,  AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [AuthShellComponent]
})
export class AuthModule { }

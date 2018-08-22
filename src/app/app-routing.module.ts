import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/containers/not-found/not-found.component';
import { ShellComponent } from './core/containers/shell/shell.component';
import { AuthShellComponent } from './auth/components/auth-shell/auth-shell.component';

const routes: Routes = [
  {
    path: 'poker',
    component: ShellComponent,
    loadChildren: './poker/poker.module#PokerModule'
  },
  {
    path: 'user',
    component: AuthShellComponent,
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

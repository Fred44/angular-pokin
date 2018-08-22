import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UIMaterialModule } from '../ui-material';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShellComponent } from './containers/shell/shell.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { reducer } from './store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    UIMaterialModule,
    StoreModule.forFeature('core', reducer)
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ShellComponent,
    NotFoundComponent,
  ],
  providers: [
  ],
  exports: [
    ShellComponent,
    NotFoundComponent,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}

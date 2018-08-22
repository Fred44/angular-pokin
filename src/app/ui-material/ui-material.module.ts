import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule, MatRadioModule, MatButtonToggleModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule
  ]
})
export class UIMaterialModule { }

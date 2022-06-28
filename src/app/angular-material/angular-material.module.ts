import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatIconModule
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ]
})
export class AngularMaterialModule { }

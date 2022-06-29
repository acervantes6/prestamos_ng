import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamosComponent } from './prestamos.component';



@NgModule({
  declarations: [
    PrestamosComponent
  ],
  exports: [
    PrestamosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrestamosModule { }

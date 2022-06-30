import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamosComponent } from './prestamos.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    PrestamosComponent
  ],
  exports: [
    PrestamosComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class PrestamosModule { }

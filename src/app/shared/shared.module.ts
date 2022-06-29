import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MenuComponent } from './menu/menu.component';
import { PrevioComponent } from './previo/previo.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MenuComponent,
    PrevioComponent,
    FooterComponent
  ],
  exports: [
    MenuComponent,
    PrevioComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class SharedModule { }

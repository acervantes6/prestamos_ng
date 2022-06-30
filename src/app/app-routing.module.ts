import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { RegisterComponent } from './register/register.component';
import { PrevioComponent } from './shared/previo/previo.component';

const routes: Routes = [
  { path: '', component: PrevioComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'loans', component: PrestamosComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

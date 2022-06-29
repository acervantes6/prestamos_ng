import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  contactForm! : FormGroup;
  hide = true;

  
  constructor( 
    private authService: AuthService, 
    private router: Router
  ) { 
    this.contactForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(10)])
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const { email, password } = this.contactForm.value;
    this.authService.login(email, password).then(user => {
      if(!user) {
        alert("User not found, If you don't have an account, register!");
        return;
      };
      this.router.navigate(['/list'])
    }).catch(err => {})
  }

  logout() {
    this.authService.logout();
  }

}

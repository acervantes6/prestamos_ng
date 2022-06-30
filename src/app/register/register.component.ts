import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: any [] = [];
  user = {
    email: '',
    password: '',
  };
  contactForm! : FormGroup;
  hide = true;

  constructor(
    private authService: AuthService,
    private database: DatabaseService,
    private router: Router,
  ) { 
      this.contactForm = new FormGroup({
      name : new FormControl ('',[Validators.required]),
      email : new FormControl ('',[Validators.required,Validators.email]),
      password : new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    });
  }

  ngOnInit(): void {
  }
  register() {
    const { email, password } = this.contactForm.value;
    this.authService.register(email, password).then(() => {
        this.database.create('users', this.user);
        this.router.navigate(['/loans']);

    }).catch(err => {
      alert("User already exist, verify your data!");
    })
      this.contactForm.reset();
  } 

  
  logout() {
    this.authService.logout();
  }
}

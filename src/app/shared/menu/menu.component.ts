import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userLogged = this.authService.getUserLogged();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logout();
  }

}

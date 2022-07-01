import { Component } from '@angular/core';
import { LoanService } from './services/loan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prestamos_ng';

  constructor(private loansService: LoanService) {
    this.loansService.getLoans().then( response => {
      console.log('Loans:', response);
    });
  }
}

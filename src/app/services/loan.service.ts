import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private dbService: DatabaseService) {}

  storeLoans() {
  }

  getLoans(id: string = '') {
    return this.dbService.read('userLoan', id);
  }

}

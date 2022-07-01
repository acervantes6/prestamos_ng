import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA } from './list.interface';

interface User {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})

export class PrestamosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'monto', 'nombre', 'correo'];
  dataSource = ELEMENT_DATA;
  users: User[] = [
    {value: '0', viewValue: 'Account1'},
    {value: '1', viewValue: 'Account2'},
    {value: '2', viewValue: 'Account3'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 10000) {
      return Math.round(value / 1000) + 'k';
    } else if(value <= 9999){
      return 0
    }
    return value;
  }

}


import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA } from './list.interface';


@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {
  displayedColumns: string[] = ['position', 'mejorTasa', 'tasaPromedio', 'tasaBancos'];
  dataSource = ELEMENT_DATA;
  

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


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.less']
})
export class PizzaComponent implements OnInit {

  sosSelected = false;
  kabanosSelected = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSos() {
    if (this.sosSelected) {
      this.sosSelected = false;
    } else {
      this.sosSelected = true;
    }
  }

  toggleKabanos() {
    if (this.kabanosSelected) {
      this.kabanosSelected = false;
    } else {
      this.kabanosSelected = true;
    }
  }
}

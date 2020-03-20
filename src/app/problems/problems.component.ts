import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.less']
})
export class ProblemsComponent implements OnInit {
  dane: string;
  wynik: string;

  constructor() { }

  ngOnInit() {
  }

  sumuj() {
    this.wynik = '' + this.sum_a(this.konwertuj(this.dane));
  }

  solve() {
    let numbers = this.dane.split(' ').map(s => parseInt(s)); //tablica czterech liczb
    
  }


  private sum_a(tab) {
    let sum = 0;
    for(let x of tab) {
      sum += x;
    }
    return sum;
  }

  private konwertuj(str) {
    let stringi = str.split(' ');
    let liczby = [];
    for(let s of stringi) {
      liczby.push(parseInt(s));
    }
    return liczby;
  }

}

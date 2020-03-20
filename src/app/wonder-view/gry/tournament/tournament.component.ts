import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.less']
})
export class TournamentComponent implements OnInit {
  liczba1: number = 12;
  wyniki = [10, 5, 80]; //to jest tablica
  nowy_wynik = 0;
  large_results: number[];
  even_results: number[];

  constructor() {
  }

  ngOnInit() {
  }

  sortuj_wyniki() {
    this.wyniki.sort((a, b) => a - b);
  }

  add() {
    // this.wyniki.push(this.nowy_wynik);
    this.wyniki.unshift(this.nowy_wynik);
    //todo: spowodować, by do tablicy dodawało nie 100, tylko liczbę,
    //  którą user wpisał wcześniej w dodatkowe pole typu "input"
  }

  prepareModal() {
    //zbieramy wyniki >=10
    this.large_results = [];
    let x = 12;

    for(let w of this.wyniki) {
      console.log('sprawdzam wynik:' + w);
      if (w>=10) {
        this.large_results.push(w);
      }
    }

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.less']
})
export class GuessComponent implements OnInit {
  your_guess: number;
  wynik: string;
  target: number;

  ngOnInit() {
    this.target = 500;
  }

  new_guess(your_guess: number) {
    //ustawić pole `wynik` na jakiś komentarz nt. czy `your_guess` jest > < względem
    //poszukiwanej liczby
    if (this.target > your_guess) {
      this.wynik = 'Poszukiwana liczba jest większa niż ' + your_guess;
    } else if (this.target < your_guess) {
      this.wynik = 'Poszukiwana liczba jest mniejsza niż ' + your_guess;
    } else {
      this.wynik = 'TRAFIONE!!'
    }
  }


  constructor() { }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-number',
  templateUrl: './guess-number.component.html',
  styleUrls: ['./guess-number.component.less']
})
export class GuessNumberComponent implements OnInit {
  guess: string;
  wynikSprawdzenia: string;

  constructor() { }

  ngOnInit() {
  }


  check() {
    let nnn = parseInt(this.guess);
    if (nnn == 500) {
      //co wykonać jeśli trafiliśmy liczbę!
    }
    if (nnn > 500) {
      //co ma być wykonane jeśli nnn > 500
      this.wynikSprawdzenia = 'poszukiwana liczba jest mniejsza od ' + nnn;
    } else {
      //co wykonać w przeciwnym wypadku
      this.wynikSprawdzenia = 'poszukiwana liczba jest większa od ' + nnn;
    }
  }

}

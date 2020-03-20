import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wonder-view',
  templateUrl: './wonder-view.component.html',
  styleUrls: ['./wonder-view.component.less']
})
export class WonderViewComponent implements OnInit {
  inputtext: string;
  wynik: number;



  constructor() { }

  ngOnInit() {
  }

  dodaj() {
    //ten kod będzie wykonany po przyciśnięciu odpowiedniego buttona
    let nnn = parseInt(this.inputtext);
///
    this.wynik = nnn + nnn;

  }

}

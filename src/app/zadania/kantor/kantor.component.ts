import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kantor',
  templateUrl: './kantor.component.html',
  styleUrls: ['./kantor.component.less']
})
export class KantorComponent implements OnInit {
  amount: number;
  amountEUR: number;
  amountUSD: number;
  amountCNY: number;

  EURPLN: number;
  USDPLN: number;
  CNYPLN: number;

  constructor() { }

  ngOnInit() {
    this.EURPLN = 4.3;
    this.USDPLN = 3.9;
    this.CNYPLN = 0.55;
  }

  compute(amount: number) {
    this.amountEUR = amount / this.EURPLN;
  }
}

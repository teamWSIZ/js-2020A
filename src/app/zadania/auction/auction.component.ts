import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.less']
})
export class AuctionComponent implements OnInit {
  your_bid: number;
  highest_bid: number;

  @Input()
  first_bid: number;

  constructor() { }

  ngOnInit() {
    this.highest_bid = 10;
  }

  new_bid(your_bid: number) {
    if (your_bid > this.highest_bid) {
      this.highest_bid = your_bid;
    } else {
      alert('zbyt niska oferta');
    }
  }
}

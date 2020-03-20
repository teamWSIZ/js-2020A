import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ncov2019',
  templateUrl: './ncov2019.component.html',
  styleUrls: ['./ncov2019.component.less']
})
export class Ncov2019Component implements OnInit {
  // bit.do/2019cov
  confirmed = [1900,2800,4600, 6000, 7750, 9745, 11820];
  deaths = [56, 80, 106, 130, 170, 213, 259];
  r = 1.21;
  constructor() { }
  ngOnInit() {
  }

  calc(array) {
    for(let i=0; i<10; i+=1) {
      let last = array[array.length - 1];
      array.push(last * this.r);
    }
  }

  show_it(c: number) {
    if (c >= 1000000) {
      return '' + Math.round(c/1000)/1000 + ' mln';
    }
    return '' + Math.round(c);
  }

  show_date(i: number) {
    let day = 25 + i;
    if (day <= 31) {
      return day + ' Jan';
    }
    day -= 31;
    if (day <= 29) {
      return day + ' Feb';
    }
    day -= 29;
    return day + ' Mar';

  }
}

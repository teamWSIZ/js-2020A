import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ttableview',
  templateUrl: './ttableview.component.html',
  styleUrls: ['./ttableview.component.less']
})
export class TtableviewComponent implements OnInit {
  @Input()
  toptitle: string;

  @Input()
  numbers: number[];

  constructor() { }

  ngOnInit() {
  }

}

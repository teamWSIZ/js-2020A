import { Component, OnInit } from '@angular/core';
import {Bucket} from "./model/bucket";

@Component({
  selector: 'app-bucket-game',
  templateUrl: './bucket-game.component.html',
  styleUrls: ['./bucket-game.component.less']
})
export class BucketGameComponent implements OnInit {
  buckets: Bucket[];
  selectedBucket: Bucket;

  ngOnInit() {
    this.buckets = [];  //pusta tablica
    this.buckets.push(new Bucket(13, 13));  //dorzuca na koniec tablicy
    console.log(this.buckets[0]); //pierwszy bucket w tablicy
    this.buckets.push(new Bucket(5, 0));
    this.buckets.push(new Bucket(3, 0));
    this.selectedBucket = null;
  }

  bucketClicked(b: Bucket) {
    if (this.selectedBucket==null) {
      //zaznaczamy nowe
      this.selectedBucket = b;
    } else {
      //przelewamy
      this.bucketToBucketTransfer(this.selectedBucket, b);
      //...
      this.selectedBucket = null;
    }
  }

  private bucketToBucketTransfer(fromBucket: Bucket, toBucket: Bucket) {
    //Funkcja realizująca przelanie cieczy z `fromBucket` do `toBucket`

  }

  constructor() { }

}

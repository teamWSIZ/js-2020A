import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit {
  inputNumber: number = 12;
  wyniki: number[] = [10, 5, 80,11, 99, 95,0,1,2]; //to jest tablica
  nowy_wynik = 0;
  large_results: number[];
  small_results: number[];
  even_results: number[];


  constructor() { }

  ngOnInit() {
  }

  prepareReport() {
    //tu przygotujemy zmienne do wyswietlenia w modalu
    this.wyniki.sort((a,b)=>a-b);
    this.small_results = this.wyniki.slice(0, 5); //elementy 0 ... 4
    this.large_results = this.wyniki.slice(-5);  //5 ostatnich elementow
    this.even_results = this.wyniki.filter(a=>(a%2==0)); //wybranie podtablicy elementw parzystych
  }
}

export class Case {
  date: Date;
  confirmed: number;
  deaths: number;
  //severe, recovered ....

  constructor(date: Date, confirmed: number, deaths: number) {
    this.date = date;
    this.confirmed = confirmed;
    this.deaths = deaths;
  }
}

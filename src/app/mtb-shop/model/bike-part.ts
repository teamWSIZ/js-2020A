export class BikePart {
  id: number;
  name: string;
  price: number;
  selected: boolean;

  constructor(id: number, name: string, price: number, selected: boolean) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.selected = selected;
  }
}

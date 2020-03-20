export class Bucket {
  capacity: number; //content is always <= capacity
  content: number;  //content >=0

  constructor(capacity, content) {
    // "konstruktor", czyli sposób tworzenia Bucket-ów (instancji klasy)
    this.capacity = capacity;
    this.content = content;
  }
}

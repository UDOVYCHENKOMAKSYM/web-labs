export class Goods {
  amount: number;
  price: number;
  constructor(amount: number, price: number) {
    if (amount >= 0 && price >= 0) {
      this.amount = amount;
      this.price = price;
    } else {
      this.amount = 0;
      this.price = 0;
    }
  }
  //Розрахунок вартості товару
  getCost( ){
    return this.amount*this.price;
  }
}

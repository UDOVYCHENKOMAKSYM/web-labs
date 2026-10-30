import {Goods} from './Goods';

export class Markers extends Goods {
    name: string;
    s: number;
    constructor (amount: number, price: number, name: string, s: number){
        super( amount, price);
        this.name=name;
        if(s>0)this.s=s;
        else this.s=1;
    }
    override getCost() {
         return this.amount*this.price*(1/this.s);
    }

}
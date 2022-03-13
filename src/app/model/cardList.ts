import { Cards } from './cards';
export class CardList{
    results: Cards[];
    count: number;

    constructor(obj?:any){
        this.results = obj && obj.results.map( elem =>{return new Cards(elem)}) || [];
        this.count = obj && obj.count || 0;
    }
}
import { CardComment } from "./comments";

export class CommentsList{
    results: CardComment[];
    count: number;

    constructor(obj?:any){
        this.results = obj && obj.results.map( x => { return new CardComment(x)}) || [];
        this.count = obj && obj.count || 0;
    }
}
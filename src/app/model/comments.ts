export class CardComment{
    cards: number;
    text: string;
    author: string;
    date: Date;
    _id: number;

    constructor(obj?: any){
        this.cards = obj && obj.cards || null;
        this.text = obj && obj.text || "";
        this.author = obj && obj.author || "";
        this.date = obj && obj.date || 0;
        this._id = obj && obj._id || null;
    }
}
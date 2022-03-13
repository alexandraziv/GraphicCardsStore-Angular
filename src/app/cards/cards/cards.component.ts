import { CardComment } from './../../model/comments';
import { Cards } from './../../model/cards';
import { GraphxService } from './../../service/graphx.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  parameters ={
    page: 1,
    pageSize: 5
  }

  comments: CardComment[];
  clicked = false;
  cardId: number;

  pageSizes = [5, 10, 20]

  cards: Cards[];
  numberOfCards: number;

  text: string = "";
  textLength: number = 130;
  isShowMore: boolean = false;
  showText: string = "";

  constructor(private service: GraphxService) { }

  ngOnInit(): void {
    this.getAllCards()
  }

  getAllCards(){
    this.service.getAllCards(this.parameters).subscribe(
      x => {
        this.cards = x.results;
        this.numberOfCards = x.count;
      }
    )
  }

  changePage(nova: number){
    if( nova >= 1 && nova <= (Math.ceil(this.numberOfCards / this.parameters.pageSize))){
      this.parameters.page = nova;
      this.getAllCards()
    }
  }

  changePageSize(n: number){
    this.parameters.pageSize = n;
    this.getAllCards()
  }


  showComments(id: number){
    this.cardId = id;
    this.clicked = true;
    this.service.getComments(id).subscribe(
      x=> { this.comments = x.results}
    )
  }

  setGrade(newGrade: number, id: number){
    this.service.getOneCard(id).subscribe(
      x=>{
        let updatedCard = x;
        updatedCard.grade = newGrade;
        this.service.updateCard(updatedCard).subscribe(
          elem => { this.getAllCards()}
        )
      }
    )
  }

  toggleShow() {
    this.isShowMore = !this.isShowMore;
    if(!this.isShowMore || this.textLength > this.text.length) {
      this.showText = this.text;
    } else {
      this.showText = this.text.substring(0, this.textLength)
    }
  }
}

import { GraphxService } from './../../service/graphx.service';
import { CardComment } from './../../model/comments';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cardcomments',
  templateUrl: './cardcomments.component.html',
  styleUrls: ['./cardcomments.component.css']
})
export class CardcommentsComponent implements OnInit {

  @Input() comments: CardComment[];
  @Input() cardId: number;

  commentForm : FormGroup;
  newComment: CardComment;

  d = new Date();

  constructor(private fb: FormBuilder, private service: GraphxService) { }

  ngOnInit(): void {

    this.commentForm = this.fb.group({
      author:'',
      text: '',
      date: this.d
    })
  }

  onSubmit(){
    this.newComment = new CardComment(this.commentForm.value);
    if(this.comments.length != 0){
      this.newComment._id = this.comments.length + 1;
    } else {
      this.newComment._id = 1;
    }
    this.newComment.cards = this.cardId;

    this.service.postComment(this.newComment).subscribe(
      x=> {
        this.service.getComments(this.cardId).subscribe(
          elem =>{
            this.comments = elem.results;
          }
        )
      }
    )
    this.commentForm.reset();
  }
}

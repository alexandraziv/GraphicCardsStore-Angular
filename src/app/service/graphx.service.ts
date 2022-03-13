import { Cards } from './../model/cards';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { CardList } from '../model/cardList';
import { CardComment } from '../model/comments';
import { CommentsList } from '../model/commentsList';

const url = "http://localhost:3000/api/cards";

@Injectable({
  providedIn: 'root'
})
export class GraphxService {

  constructor(private http: HttpClient) { }

  getAllCards(parameters?:any):Observable<CardList>{
    let queryParams = {};

    if( parameters ){
      queryParams = {
        params: new HttpParams()
        .set("page", parameters.page || "")
        .set("pageSize", parameters.pageSize || "")
      }
    }

    return this.http.get(url, queryParams).pipe(map(
      elem => { return new CardList(elem)}
    ))
  }

  getOneCard(id: number):Observable<Cards>{
    return this.http.get(url + "/" + id).pipe(map(
      elem => { return new Cards(elem)}
    ))
  }

  getComments(id: number):Observable<CommentsList>{
    return this.http.get(url + "/" + id + "/comments").pipe(map(
      elem => { return new CommentsList(elem)}
    ))
  }

  postComment(newComment: CardComment):Observable<CardComment>{
    return this.http.post(url + "/" + newComment.cards + "/comments", newComment ).pipe(map(
      x => { return new CardComment(x)}
    ))
  }

  updateCard(updatedCard: Cards):Observable<Cards>{
    return this.http.put(url + "/" + updatedCard._id, updatedCard ).pipe(map(
      x => { return new Cards(x)}
    ))
  }

}

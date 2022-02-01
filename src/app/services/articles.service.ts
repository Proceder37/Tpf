import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Article } from "../models/article.model";
import { convertSnaps } from "./common";

@Injectable({
    providedIn: 'root'
  })
  
  export class ArticlesService {
    constructor(private db: AngularFirestore) {
    }
  
  
    loadAllArticles(): Observable<Article[]> {
      return this.db.collection(
        "articles"
      ).get()
      .pipe(
        map(results => convertSnaps(results))
      );
    }

    getArticle(id: string){
        return this.db.collection('articles').doc(id).get().toPromise().then(snapshot =>snapshot.data())
      }
  }
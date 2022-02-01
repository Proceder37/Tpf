import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  /*
 articles=[
    {id:'1', name:'Drinki Wegańskie', img:'weganskie-koktajle.png', des:'aaaaaaaaaa'},
    {id:'2', name:'Idealna Cytrynówka', img:'cytrynowka.png',des:'aaaaaaaaaa'},
    {id:'3', name:'Właściwości czarnego piwa', img:'czarne-piwo.png',des:'aaaaaaaaaa'},
    {id:'4', name:'Koktajle na każdą okazję', img:'koktajle.png', des:'aaaaaaaaaa'},
    {id:'5', name:'Sposób na jabłko', img:'jablko.png', des:'aaaaaaaaaa'},
    {id:'6', name:'Pomysł na grzańca', img:'cytrynowka.png', des:'aaaaaaaaaa'}
  ]
  */
  articles$: Observable<Article[]> | undefined;
  constructor(protected router:Router, protected articlesService:ArticlesService) {

   }

   ngOnInit(): void {
    this.reloadElements();
  }

  reloadElements(){
    this.articles$ = this.articlesService.loadAllArticles();
  }
  gotoDetails(id:string){
    this.router.navigateByUrl("article/"+id)
  }

}

import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

 /* description=[
    {id:'11', des:'aaaaaaaaaaa a a a a a'},
    {id:'22', des:'bbbbbbbbbbbbb b b b b b'},
    {id:'33', des:'cccccccccccc c  ccc  c c'},
    {id:'44', des:'dddddddd d d  dd d d '},
    {id:'55', des:'eeeeeeeeeee e e ee ee e'},
    {id:'66', des:'fffffffffff f fff ffff f'}
  ]
  */
description=[]

article:any;

 //description: {id: string; name: string};

  constructor(private router : ActivatedRoute,  protected articlesService:ArticlesService) { }

  ngOnInit(): void {
    const id=this.router.snapshot.params.id
    this.articlesService.getArticle(id).then(result=>{this.article=result})
    //this.description=this.router.snapshot.paramMap.getAll
    
  }

}

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

article:any;

 //description: {id: string; name: string};

  constructor(private router : ActivatedRoute,  protected articlesService:ArticlesService) { }

  ngOnInit(): void {
    const id=this.router.snapshot.params.id
    this.articlesService.getArticle(id).then(result=>{this.article=result})
    //this.description=this.router.snapshot.paramMap.getAll
    
  }

}

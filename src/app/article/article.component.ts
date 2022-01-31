import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles=[
    {id:'1', name:'Drinki Wegańskie', img:'weganskie-koktajle.png'},
    {id:'2', name:'Idealna Cytrynówka', img:'cytrynowka.png'},
    {id:'3', name:'Właściwości czarnego piwa', img:'czarne-piwo.png'},
    {id:'4', name:'Koktajle na każdą okazję', img:'koktajle.png'},
    {id:'5', name:'Sposób na jabłko', img:'jablko.png'},
    {id:'6', name:'Pomysł na grzańca', img:'cytrynowka.png'}
  ]
  constructor(protected router:Router) {

   }

  ngOnInit(): void {
  }
  gotoDetails(id:string){
    this.router.navigateByUrl("article/"+id)
  }

}

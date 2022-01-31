import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  description=[
    {id:'1', des:'Drinki Wegańskie'},
    {id:'2', des:'Idealna Cytrynówka'},
    {id:'3', des:'Właściwości czarnego piwa'},
    {id:'4', des:'Koktajle na każdą okazję'},
    {id:'5', des:'Sposób na jabłko'},
    {id:'6', des:'Pomysł na grzańca'}
  ]
  constructor(private router : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params)
    this.description=this.router.snapshot.params.id
    
  }

}

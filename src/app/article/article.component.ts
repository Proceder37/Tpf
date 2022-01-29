import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public article=[
    {"id":1, "name":"Drinki Wegańskie", "img":"weganskie-koktajle.png" },
    {"id":2, "name":"Idealna Cytrynówka", "img":"cytrynowka.png" },
    {"id":3, "name":"Właściwości czarnego piwa", "img":"czarne-piwo.png" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

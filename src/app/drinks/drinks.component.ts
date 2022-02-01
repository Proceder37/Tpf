import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  drinks=[
    {id:'1', name:'Old Fashioned', img:'old-fashioned.png'},
    {id:'2', name:'Whiskey Sour', img:'whiskey-sour.png'},
    {id:'3', name:'Manhatan', img:'manhatan.png'},
    {id:'4', name:'Negroni', img:'negroni.png'},
    {id:'5', name:'Blod Mary', img:'blod-mary.png'},
    {id:'6', name:'Long Island', img:'long-island.png'}
  ]
  constructor(protected router:Router) {

   }

  ngOnInit(): void {
  }
  goDetails(id:string){
    this.router.navigateByUrl("drinks/"+id)
  }

}

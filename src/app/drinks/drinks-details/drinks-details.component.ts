import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/models/drink.model';
import { DrinksService } from 'src/app/services/drinks.service';

@Component({
  selector: 'app-drinks-details',
  templateUrl: './drinks-details.component.html',
  styleUrls: ['./drinks-details.component.scss']
})
export class DrinksDetailsComponent implements OnInit {

  drink:any;
  
   //description: {id: string; name: string};
  
    constructor(private router : ActivatedRoute,  protected drinksService:DrinksService) { }
  
    ngOnInit(): void {
      const id=this.router.snapshot.params.id
      this.drinksService.getDrink(id).then(result=>{this.drink=result})
      //this.description=this.router.snapshot.paramMap.getAll
      
    }
  
  }
  
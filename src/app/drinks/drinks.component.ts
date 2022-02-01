import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink.model';
import { DrinksService } from '../services/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  drinks$: Observable<Drink[]> | undefined;
  constructor(protected router:Router, protected drinksService:DrinksService) {

   }

   ngOnInit(): void {
    this.reloadElements();
  }

  reloadElements(){
    this.drinks$ = this.drinksService.loadAllDrinks();
  }
  goDetails(id:string){
    this.router.navigateByUrl("drinks/"+id)
  }

}
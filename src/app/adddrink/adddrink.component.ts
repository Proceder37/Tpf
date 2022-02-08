import { Component, OnInit } from '@angular/core';
import { AddService } from '../services/add.service';


@Component({
  selector: 'app-adddrink',
  templateUrl: './adddrink.component.html',
  styleUrls: ['./adddrink.component.scss']
})
export class AdddrinkComponent implements OnInit {


  ngOnInit(): void {
  }

  drinkName:string;
  drinkDescription:string;
  drinkIngredients:string;
  drinkInstruction:string;
  drinkKcal:number;
  drinkImage:string;
  message: string;

  constructor(public addservice:AddService){}

  CreateRecord()
  {
    let Record = {
      name: this.drinkName,
      description: this.drinkDescription,
      ingredients: this.drinkIngredients,
      instruction: this.drinkInstruction,
      kcal: this.drinkKcal,
      image: this.drinkImage
    };
    
    this.addservice.create_Newdrink(Record).then(res => {
      this.drinkName="";
      this.drinkDescription="";
      this.drinkIngredients="";
      this.drinkInstruction="";
      this.drinkKcal=0;
      this.drinkImage="";
      console.log(res);
      this.message = "Drink został dodany do bazy!";
    }).catch(error =>{
      console.log(error);
    })
  }
}

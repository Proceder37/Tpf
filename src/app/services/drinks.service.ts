import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Drink } from "../models/drink.model";
import { convertSnaps } from "./common";

@Injectable({
    providedIn: 'root'
  })
  
  export class DrinksService {
    constructor(private db: AngularFirestore) {
    }
  
  
    loadAllDrinks(): Observable<Drink[]> {
      return this.db.collection(
        "drinks"
      ).get()
      .pipe(
        map(results => convertSnaps(results))
      );
    }

    getDrink(id: string){
        return this.db.collection('drinks').doc(id).get().toPromise().then(snapshot =>snapshot.data())
      }
  }
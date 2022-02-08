import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
    providedIn: 'root'
})
export class AddService{

    constructor(public fireservices:AngularFirestore){}

    create_Newdrink(Record: unknown)
    {
        return this.fireservices.collection('drinks').add(Record);
    }
}
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isSignedIn = false;
  constructor(public firebaseService : FirebaseService){}
  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
      this.isSignedIn = true
    else
      this.isSignedIn= false
  }
  async onSignUp(email:string, password:string){
    await this.firebaseService.signUp(email,password);
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
  }
  async onSignIn(email:string, password:string){
    await this.firebaseService.signIn(email,password);
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
  }
  handleLogout(){
    this.isSignedIn = false;

  }

}
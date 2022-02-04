import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logout();
    this.isLogout.emit();
  }

}
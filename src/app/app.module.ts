import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireFunctionsModule} from '@angular/fire/compat/functions';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { ArticleComponent } from './article/article.component';
import { DrinksComponent } from './drinks/drinks.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { DrinksDetailsComponent } from './drinks/drinks-details/drinks-details.component';
import { environment } from 'src/environments/environment';
import { SignupComponent } from './signup/signup.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { FirebaseService } from './services/firebase.service';
import { AdddrinkComponent } from './adddrink/adddrink.component';
import {AddService} from './services/add.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ArticleComponent,
    DrinksComponent,
    CocktailsComponent,
    ArticleDetailsComponent,
    DrinksDetailsComponent,
    SignupComponent,
    LoggedInComponent,
    AdddrinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCCNr2UOaWW9XNlYXosmamhjGDUnQNi1KI",
      authDomain: "drink-acad3.firebaseapp.com",
      projectId: "drink-acad3",
      storageBucket: "drink-acad3.appspot.com",
      messagingSenderId: "1046321367759",
      appId: "1:1046321367759:web:d007e80f4f71f89d2485ba"
    }),
  ],
  providers: [FirebaseService, AddService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { ArticleComponent } from './article/article.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ShotsComponent } from './shots/shots.component';
import { CocktailsComponent } from './cocktails/cocktails.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ArticleComponent,
    DrinksComponent,
    ShotsComponent,
    CocktailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

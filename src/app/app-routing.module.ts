import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './article/article.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { DrinksDetailsComponent } from './drinks/drinks-details/drinks-details.component';
import { SignupComponent } from './signup/signup.component';
import { AdddrinkComponent } from './adddrink/adddrink.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'drinks/:id', component: DrinksDetailsComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'adddrinks', component: AdddrinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ArticleComponent,
  ArticleDetailsComponent,
  DrinksComponent,
  DrinksDetailsComponent
]
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './article/article.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ShotsComponent } from './shots/shots.component';
import { CocktailsComponent } from './cocktails/cocktails.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'shots', component: ShotsComponent },
  { path: 'cocktails', component: CocktailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

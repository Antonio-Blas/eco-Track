import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TipsListComponent } from './components/tips-list/tips-list';
import { TipDetailComponent } from './components/tip-detail/tip-detail';
import { TipFormComponent } from './components/tip-form/tip-form';
import { ChallengesComponent } from './components/challenges/challenges';
import { FavoritesComponent } from './components/favorites/favorites';

const routes: Routes = [
  { path: '', component: TipsListComponent },
  { path: 'new', component: TipFormComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: ':id', component: TipDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsRoutingModule {}

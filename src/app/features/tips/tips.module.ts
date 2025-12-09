import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsRoutingModule } from './tips-routing.module';

import { TipsListComponent } from './components/tips-list/tips-list';
import { TipDetailComponent } from './components/tip-detail/tip-detail';
import { TipFormComponent } from './components/tip-form/tip-form';
import { ChallengesComponent } from './components/challenges/challenges';
import { FavoritesComponent } from './components/favorites/favorites';

@NgModule({
  imports: [
    CommonModule,
    TipsRoutingModule,
    TipsListComponent,
    TipDetailComponent,
    TipFormComponent,
    ChallengesComponent,
    FavoritesComponent
  ]
})
export class TipsModule {}

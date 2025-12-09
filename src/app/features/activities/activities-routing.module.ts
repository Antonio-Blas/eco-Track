import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivityListComponent } from './components/activities-list/activity-list';
import { ActivityFormComponent } from './components/activity-form/activity-form';
import { ActivityDetailComponent } from './components/activity-detail/activity-detail';

const routes: Routes = [
  { path: '', component: ActivityListComponent },
  { path: 'new', component: ActivityFormComponent },
  { path: ':id', component: ActivityDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule {}

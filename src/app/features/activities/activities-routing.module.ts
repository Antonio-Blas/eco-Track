import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadComponent: () => import('./components/activities-list/activity-list')
      .then(m => m.ActivityListComponent)
  },
  { 
    path: 'new',
    loadComponent: () => import('./components/activity-form/activity-form')
      .then(m => m.ActivityFormComponent)
  },
  { 
    path: ':id',
    loadComponent: () => import('./components/activity-detail/activity-detail')
      .then(m => m.ActivityDetailComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule {}
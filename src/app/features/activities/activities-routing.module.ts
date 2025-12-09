import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesListComponent } from './components/activities-list/activity-list';
import { ActivityFormComponent } from './components/activity-form/activity-form';

const routes: Routes = [
  { path: '', component: ActivitiesListComponent },
  { path: 'new', component: ActivityFormComponent } // Nueva ruta para crear actividades
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule {}

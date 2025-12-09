import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivitiesRoutingModule } from './activities-routing.module';

// Importamos los standalone correctamente
import { ActivityFormComponent } from './components/activity-form/activity-form';
import { ActivityListComponent } from './components/activities-list/activity-list';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ActivitiesRoutingModule,
    ActivityFormComponent,
    ActivityListComponent
  ]
})
export class ActivitiesModule {}

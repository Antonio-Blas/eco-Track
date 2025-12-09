import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';

// Importamos los standalone correctamente
import { ActivityFormComponent } from './components/activity-form/activity-form';
import { ActivityListComponent } from './components/activities-list/activity-list';

@NgModule({
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    ActivityFormComponent,
    ActivityListComponent
  ]
})
export class ActivitiesModule {}

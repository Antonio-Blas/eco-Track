import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivitiesRoutingModule } from './activities-routing.module';

// IMPORTAMOS los componentes standalone
import { ActivitiesListComponent } from './components/activities-list/activity-list';
import { ActivityFormComponent } from './components/activity-form/activity-form';

@NgModule({
  // ❌ NO declarar standalone components aquí
  // declarations: [],

  // ✅ Importarlos directamente
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ActivitiesRoutingModule,
    ActivitiesListComponent,
    ActivityFormComponent
  ]
})
export class ActivitiesModule {}

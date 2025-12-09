import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressRoutingModule } from './progress-routing.module';

import { ProgressHomeComponent } from './components/progress-home/progress-home';
import { ProgressBadgeComponent } from './components/progress-badge/progress-badge';

@NgModule({
  imports: [
    CommonModule,
    ProgressRoutingModule,
    ProgressHomeComponent,
    ProgressBadgeComponent
  ]
})
export class ProgressModule {}

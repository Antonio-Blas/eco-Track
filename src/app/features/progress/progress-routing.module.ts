import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressHomeComponent } from './components/progress-home/progress-home';

const routes: Routes = [
  { path: '', component: ProgressHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressRoutingModule {}

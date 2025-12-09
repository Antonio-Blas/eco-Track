// src/app/features/profile/profile-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMainComponent } from './components/profile-main/profile-main';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings';

const routes: Routes = [
  { path: '', component: ProfileMainComponent },
  { path: 'settings', component: ProfileSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}

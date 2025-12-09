// src/app/features/profile/profile.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';

// componentes standalone (se importan en el módulo)
import { ProfileMainComponent } from './components/profile-main/profile-main';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ProfileMainComponent,
    ProfileSettingsComponent
  ]
})
export class ProfileModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'activities', loadChildren: () => import('./features/activities/activities.module').then(m => m.ActivitiesModule) },
  { path: 'progress', loadChildren: () => import('./features/progress/progress.module').then(m => m.ProgressModule) },
  { path: 'tips', loadChildren: () => import('./features/tips/tips.module').then(m => m.TipsModule) },
  { path: 'community', loadChildren: () => import('./features/community/community.module').then(m => m.CommunityModule) },
  { path: 'profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule) },
  { path: '', redirectTo: 'activities', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

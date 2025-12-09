// Declaración de rutas - cada ruta apunta a un componente standalone (los generaremos luego)
import { Routes } from '@angular/router';
import { ActivityListComponent } from './features/activities/components/activities-list/activity-list';
import { ProgressDashboardComponent } from './features/progress/progress-dashboard/progress-dashboard';
import { TipsListComponent } from './features/tips/tips-list/tips-list';
import { CommunityFeedComponent } from './features/community/community-feed/community-feed';
import { UserProfileComponent } from './features/profile/user-profile/user-profile';

export const routes: Routes = [
  { path: 'activities', component: ActivityListComponent },
  { path: 'progress', component: ProgressDashboardComponent },
  { path: 'tips', component: TipsListComponent },
  { path: 'community', component: CommunityFeedComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '', redirectTo: 'activities', pathMatch: 'full' }
];

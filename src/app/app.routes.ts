// Declaración de rutas - cada ruta apunta a un componente standalone
import { Routes } from '@angular/router';
import { ActivityListComponent } from './features/activities/components/activities-list/activity-list';
import { ProgressHomeComponent } from './features/progress/components/progress-home/progress-home';
import { TipsListComponent } from './features/tips/components/tips-list/tips-list';
import { CommunityFeedComponent } from './features/community/components/community-feed/community-feed';


export const routes: Routes = [
  { path: 'activities', component: ActivityListComponent },
  { path: 'progress', component: ProgressHomeComponent },
  { path: 'tips', component: TipsListComponent },
  { path: 'community', component: CommunityFeedComponent },
  { path: 'profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule) },
  { path: '', redirectTo: 'activities', pathMatch: 'full' }
];

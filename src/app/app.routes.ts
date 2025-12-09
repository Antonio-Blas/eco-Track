// Declaración de rutas - cada ruta apunta a un componente standalone
import { Routes } from '@angular/router';
import { ProgressHomeComponent } from './features/progress/components/progress-home/progress-home';
import { TipsListComponent } from './features/tips/components/tips-list/tips-list';
import { CommunityFeedComponent } from './features/community/components/community-feed/community-feed';


export const routes: Routes = [
 {
    path: 'activities',
    loadChildren: () => import('./features/activities/activities.module')
      .then(m => m.ActivitiesModule)
  },
  // Redirección opcional
  { path: '', redirectTo: '/activities', pathMatch: 'full' },
  { path: 'progress', component: ProgressHomeComponent },
  { path: 'tips', component: TipsListComponent },
  { path: 'community', component: CommunityFeedComponent },
  { path: 'profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule) },

  { path: '', redirectTo: 'activities', pathMatch: 'full' }
];


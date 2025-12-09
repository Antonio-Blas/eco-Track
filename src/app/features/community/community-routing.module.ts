import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityFeedComponent } from './components/community-feed/community-feed';
import { PostDetailComponent } from './components/post-detail/post-detail';

const routes: Routes = [
  { path: '', component: CommunityFeedComponent },
  { path: ':id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule {}

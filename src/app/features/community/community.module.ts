import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityRoutingModule } from './community-routing.module';

import { CommunityFeedComponent } from './components/community-feed/community-feed';
import { PostDetailComponent } from './components/post-detail/post-detail';

@NgModule({
  imports: [
    CommonModule,
    CommunityRoutingModule,
    CommunityFeedComponent,
    PostDetailComponent
  ]
})
export class CommunityModule {}

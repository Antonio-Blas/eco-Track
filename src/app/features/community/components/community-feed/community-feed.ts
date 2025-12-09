import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommunityService, Post } from '../../../../services/community.service';

@Component({
  selector: 'app-community-feed',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './community-feed.html',
  styleUrls: ['./community-feed.scss']
})
export class CommunityFeedComponent {

  posts: Post[] = [];
  newPost = '';

  constructor(private service: CommunityService) {
    this.load();
  }

  load() {
    this.posts = this.service.getAll().reverse(); // los nuevos arriba
  }

  publish() {
    if (!this.newPost.trim()) return;

    this.service.create(this.newPost);
    this.newPost = '';
    this.load();
  }

  like(id: number) {
    this.service.like(id);
    this.load();
  }
}

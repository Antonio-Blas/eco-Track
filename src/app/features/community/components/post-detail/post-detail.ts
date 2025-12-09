import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommunityService, Post } from '../../../../services/community.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-detail.html',
  styleUrls: ['./post-detail.scss']
})
export class PostDetailComponent {

  post: Post | null = null;
  comment = '';

  constructor(
    private route: ActivatedRoute,
    private service: CommunityService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.service.getById(id);
  }

  sendComment() {
    if (!this.comment.trim() || !this.post) return;
    this.service.addComment(this.post.id, this.comment);
    this.post = this.service.getById(this.post.id); // recargar
    this.comment = '';
  }
}

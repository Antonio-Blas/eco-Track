import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CommunityService {
  private posts: any[] = [];

  getAll() { return this.posts; }
  post(item: any) {
    item.id = item.id ?? String(Date.now());
    item.date = new Date().toISOString();
    this.posts.unshift(item);
  }
}

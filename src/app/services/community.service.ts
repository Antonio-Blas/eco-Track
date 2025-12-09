import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
  comments: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private storageKey = 'eco_posts';

  getAll(): Post[] {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) : [];
  }

  getById(id: number): Post | null {
    return this.getAll().find(p => p.id === id) || null;
  }

  create(content: string, author: string = 'Anónimo'): void {
    const list = this.getAll();

    const newPost: Post = {
      id: list.length ? list[list.length - 1].id + 1 : 1,
      author,
      content,
      date: new Date().toISOString(),
      likes: 0,
      comments: []
    };

    list.push(newPost);
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  like(id: number): void {
    const list = this.getAll();
    const i = list.findIndex(p => p.id === id);
    if (i === -1) return;
    list[i].likes++;
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  addComment(id: number, comment: string): void {
    const list = this.getAll();
    const p = list.find(p => p.id === id);
    if (!p) return;
    p.comments.push(comment);
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }
}

// src/app/services/activity.service.ts
import { Injectable } from '@angular/core';

export interface Activity {
  id: number;
  type: string;
  description: string;
  points: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private storageKey = 'eco_activities';

  getAll(): Activity[] {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) : [];
  }

  getById(id: number): Activity | null {
    return this.getAll().find(a => a.id === id) ?? null;
  }

  save(activity: Omit<Activity, 'id' | 'date'>): void {
    const list = this.getAll();
    const newActivity: Activity = {
      id: list.length ? list[list.length - 1].id + 1 : 1,
      date: new Date().toISOString(),
      ...activity
    };
    list.push(newActivity);
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  update(id: number, changes: Partial<Activity>): void {
    const list = this.getAll();
    const index = list.findIndex(a => a.id === id);
    if (index === -1) return;
    list[index] = { ...list[index], ...changes };
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  delete(id: number): void {
    const list = this.getAll().filter(a => a.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }
}

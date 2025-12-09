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

  constructor() {}

  getAll(): Activity[] {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) : [];
  }

  save(activity: Omit<Activity, 'id' | 'date'>): void {
    const list = this.getAll();

    const newActivity: Activity = {
      id: list.length > 0 ? list[list.length - 1].id + 1 : 1,
      date: new Date().toISOString(),
      ...activity
    };

    list.push(newActivity);
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  clear(): void {
    localStorage.removeItem(this.storageKey);
  }
}

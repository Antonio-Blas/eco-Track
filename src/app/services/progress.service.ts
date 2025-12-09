import { Injectable } from '@angular/core';
import { Activity } from '../models/activity.model';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  calculatePoints(activities: Activity[]): number {
    return activities.reduce((s, a) => s + (a.points || 0), 0);
  }
}

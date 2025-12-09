// src/app/features/activities/components/activities-list/activity-list.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivityService, Activity } from '../../../../services/activity.service';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './activity-list.html',
  styleUrls: ['./activity-list.scss']
})
export class ActivityListComponent {
  activities: Activity[] = [];
  editing: Activity | null = null;
  newDescription = '';

  constructor(private activityService: ActivityService) {
    this.load();
  }

  load() {
    this.activities = this.activityService.getAll();
  }

  startEdit(activity: Activity) {
    this.editing = { ...activity };
    this.newDescription = activity.description;
  }

  saveEdit() {
    if (!this.editing) return;
    this.activityService.update(this.editing.id, { description: this.newDescription });
    this.editing = null;
    this.load();
  }

  cancelEdit() {
    this.editing = null;
  }

  remove(id: number) {
    if (confirm('¿Seguro que quieres eliminar esta actividad?')) {
      this.activityService.delete(id);
      this.load();
    }
  }
}

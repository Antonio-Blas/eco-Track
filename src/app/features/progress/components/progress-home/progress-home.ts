import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityService } from '../../../../services/activity.service';
import { ProgressBadgeComponent } from '../progress-badge/progress-badge';

@Component({
  selector: 'app-progress-home',
  standalone: true,
  imports: [CommonModule, ProgressBadgeComponent],
  templateUrl: './progress-home.html',
  styleUrls: ['./progress-home.scss']
})
export class ProgressHomeComponent {

  totalPoints = 0;
  activitiesCount = 0;
  level = 1;
  nextLevelPoints = 100;

  constructor(private activityService: ActivityService) {
    const all = this.activityService.getAll();
    this.totalPoints = all.reduce((sum, a) => sum + a.points, 0);
    this.activitiesCount = all.length;

    this.level = Math.floor(this.totalPoints / 100) + 1;
    this.nextLevelPoints = this.level * 100;
  }

  progressPercent() {
    const prev = (this.level - 1) * 100;
    return Math.min(((this.totalPoints - prev) / 100) * 100, 100);
  }
}

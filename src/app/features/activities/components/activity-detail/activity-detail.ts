import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ActivityService, Activity } from '../../../../services/activity.service';

@Component({
  selector: 'app-activity-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './activity-detail.html',
  styleUrls: ['./activity-detail.scss']
})
export class ActivityDetailComponent {

  activity: Activity | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: ActivityService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.activity = this.service.getById(id); // Ya funciona ✔
  }
}

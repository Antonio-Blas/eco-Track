import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-badge.html',
  styleUrls: ['./progress-badge.scss']
})
export class ProgressBadgeComponent {
  @Input() text = '';
  @Input() active = false;
}

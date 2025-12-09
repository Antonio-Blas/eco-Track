import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivityService } from '../../../../services/activity.service';

@Component({
  selector: 'app-activity-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './activity-form.html',
  styleUrls: ['./activity-form.scss']
})
export class ActivityFormComponent {

  form = this.createForm();

  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService
  ) {}

  private createForm() {
    return this.fb.group({
      type: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(3)]],
      points: [1, [Validators.required, Validators.min(1)]]
    });
  }

  save() {
    if (this.form.invalid) return;

    this.activityService.save({
      type: this.form.value.type!,
      description: this.form.value.description!,
      points: this.form.value.points!
    });

    alert('Actividad registrada con éxito');
    this.form.reset();
  }
}

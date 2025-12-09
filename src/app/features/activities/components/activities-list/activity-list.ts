import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../../../services/activity.service';
import { CommonModule } from '@angular/common';

// Componente encargado de mostrar la lista de actividades registradas
@Component({
  selector: 'app-activities-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './activity-list.html',
  styleUrls: ['./activity-list.css']
})
export class ActivitiesListComponent implements OnInit {

  activities: any[] = []; // Array donde guardaremos las actividades obtenidas

  constructor(private activityService: ActivityService) {}

  // Cargar actividades al iniciar el componente
  ngOnInit(): void {
    this.activities = this.activityService.getAll();
  }
}

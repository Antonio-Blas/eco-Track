// src/app/features/profile/components/profile-main/profile-main.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService, User } from '../../../../services/user.service';

@Component({
  selector: 'app-profile-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-main.html',
  styleUrls: ['./profile-main.scss']
})
export class ProfileMainComponent {
  user: User;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }

  // Actualizar puntos visibles en la pantalla (puedes llamar esto después de cambios en actividades)
  refresh() {
    this.user = this.userService.getUser();
  }
}

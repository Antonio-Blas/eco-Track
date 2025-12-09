// src/app/features/profile/components/profile-settings/profile-settings.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService, User } from '../../../../services/user.service';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './profile-settings.html',
  styleUrls: ['./profile-settings.scss']
})
export class ProfileSettingsComponent {
  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.user = this.userService.getUser();
  }

  save() {
    this.userService.saveUser(this.user);
    this.router.navigate(['/profile']);
  }

  resetProgress() {
    if (!confirm('Restablecer puntos de progreso?')) return;
    this.userService.resetProgress();
    this.user = this.userService.getUser();
  }

  clearAccount() {
    if (!confirm('¿Borrar datos del usuario?')) return;
    this.userService.clear();
    this.user = this.userService.getUser();
    this.router.navigate(['/profile']);
  }
}

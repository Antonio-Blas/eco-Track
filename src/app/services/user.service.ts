import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private user: User = { id: 'u1', name: 'Usuario demo', dailyGoalPoints: 50 };

  getUser(): User { return this.user; }
  update(user: User) { this.user = user; }
}

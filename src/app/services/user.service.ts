// src/app/services/user.service.ts
// Servicio que gestiona el usuario (persistencia en localStorage)
import { Injectable } from '@angular/core';

export interface User {
  id: string;
  name: string;
  email?: string;
  avatarUrl?: string;
  ecoPoints?: number;
  dailyGoal?: number;
}

const STORAGE_KEY = 'eco_user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  // Devuelve el usuario guardado o uno por defecto
  getUser(): User {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as User;
    const defaultUser: User = {
      id: 'u1',
      name: 'Usuario Eco',
      email: '',
      avatarUrl: '',
      ecoPoints: 0,
      dailyGoal: 50
    };
    this.saveUser(defaultUser);
    return defaultUser;
  }

  // Guarda/actualiza el usuario
  saveUser(user: User): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }

  // Actualiza campos concretos del usuario (sin perder el resto)
  update(partial: Partial<User>): void {
    const u = this.getUser();
    const updated = { ...u, ...partial };
    this.saveUser(updated);
  }

  // Resetea puntos y datos relacionados con progreso
  resetProgress(): void {
    const u = this.getUser();
    u.ecoPoints = 0;
    this.saveUser(u);
  }

  // Borra el usuario (devuelve al estado por defecto)
  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule // 👈 NECESARIO para que routerLink funcione
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {}

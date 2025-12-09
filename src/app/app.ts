// Componente raíz . Standalone. Solo importa RouterOutlet (necesario para que se muestre la ruta activa).
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],          // RouterOutlet proviene del router; aquí solo lo declaramos
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {}
// Componente raíz . Standalone. Solo importa RouterOutlet (necesario para que se muestre la ruta activa).
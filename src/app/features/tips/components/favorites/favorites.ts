import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TipsService, Tip } from '../../../../services/tips.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.scss']
})
export class FavoritesComponent {
  favs: Tip[] = [];

  constructor(private svc: TipsService) {
    this.load();
  }

  load() {
    this.favs = this.svc.getFavorites();
  }

  toggle(id: string) {
    this.svc.toggleFavorite(id);
    this.load();
  }
}

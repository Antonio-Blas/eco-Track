import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TipsService, Tip, TipCategory } from '../../../../services/tips.service';

@Component({
  selector: 'app-tips-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './tips-list.html',
  styleUrls: ['./tips-list.scss']
})
export class TipsListComponent {
  // Variables de UI
  tips: Tip[] = [];
  categories: (TipCategory | '')[] = ['', 'transport', 'energy', 'recycling', 'general'];
  selectedCategory: TipCategory | '' = '';
  query = '';
  page = 1;
  perPage = 6;
  totalPages = 1;

  constructor(public svc: TipsService) {
    this.load();
  }

  load() {
    // Aplicar filtros: primero category, luego búsqueda
    let list = this.selectedCategory ? this.svc.filterByCategory(this.selectedCategory) : this.svc.getAll();
    if (this.query.trim()) list = list.filter(t => t.title.toLowerCase().includes(this.query.toLowerCase()) || t.text.toLowerCase().includes(this.query.toLowerCase()));
    this.totalPages = Math.max(1, Math.ceil(list.length / this.perPage));
    this.tips = list.slice((this.page - 1) * this.perPage, this.page * this.perPage);
  }

  onSearch() {
    this.page = 1;
    this.load();
  }

  changeCategory(cat: TipCategory | '') {
    this.selectedCategory = cat;
    this.page = 1;
    this.load();
  }

  clearFilters() {
    this.selectedCategory = '';
    this.query = '';
    this.page = 1;
    this.load();
  }

  toggleFavorite(id: string) {
    this.svc.toggleFavorite(id);
    this.load();
  }

  next() {
    if (this.page < this.totalPages) {
      this.page++;
      this.load();
    }
  }

  prev() {
    if (this.page > 1) {
      this.page--;
      this.load();
    }
  }
}

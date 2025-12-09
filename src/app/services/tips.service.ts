// Servicio que maneja tips y retos. Persistencia simple en localStorage.
// Comentarios en español explicando cada función.
import { Injectable } from '@angular/core';

export type TipCategory = 'transport' | 'energy' | 'recycling' | 'general';

export interface Tip {
  id: string;
  title: string;
  text: string;
  category: TipCategory;
  favorite?: boolean;
  createdAt: string;
}

export interface Challenge {
  id: string;
  title: string;
  description?: string;
  progress: number;
  target: number;
}

const TIPS_KEY = 'eco_tips_v1';
const CHALLENGES_KEY = 'eco_tips_challenges_v1';

@Injectable({ providedIn: 'root' })
export class TipsService {
  constructor() {
    // Inicializar con datos de ejemplo si no hay nada
    if (!localStorage.getItem(TIPS_KEY)) {
      const sample: Tip[] = [
        { id: 't1', title: 'Camina más', text: 'Para viajes cortos intenta caminar o usar bici.', category: 'transport', favorite: false, createdAt: new Date().toISOString() },
        { id: 't2', title: 'Apaga stand-by', text: 'Desconecta aparatos que no uses para ahorrar energía.', category: 'energy', favorite: true, createdAt: new Date().toISOString() },
        { id: 't3', title: 'Separa residuos', text: 'Separa plástico, papel y orgánicos en casa.', category: 'recycling', favorite: false, createdAt: new Date().toISOString() }
      ];
      localStorage.setItem(TIPS_KEY, JSON.stringify(sample));
    }
    if (!localStorage.getItem(CHALLENGES_KEY)) {
      const sampleC: Challenge[] = [
        { id: 'c1', title: 'Semana sin coche', description: 'Usar transporte no motorizado 3 veces', progress: 0, target: 3 },
        { id: 'c2', title: 'Ahorro energético', description: 'Reducir consumo 5 días esta semana', progress: 0, target: 5 }
      ];
      localStorage.setItem(CHALLENGES_KEY, JSON.stringify(sampleC));
    }
  }

  // --- Tips CRUD y utilidades ---

  private readTips(): Tip[] {
    return JSON.parse(localStorage.getItem(TIPS_KEY) || '[]');
  }

  private writeTips(list: Tip[]) {
    localStorage.setItem(TIPS_KEY, JSON.stringify(list));
  }

  getAll(): Tip[] {
    return this.readTips().slice().sort((a, b) => (b.createdAt.localeCompare(a.createdAt)));
  }

  getById(id: string): Tip | null {
    return this.readTips().find(t => t.id === id) ?? null;
  }

  addTip(data: { title: string; text: string; category: TipCategory }): Tip {
    const list = this.readTips();
    const newTip: Tip = {
      id: 't' + Date.now(),
      title: data.title,
      text: data.text,
      category: data.category,
      favorite: false,
      createdAt: new Date().toISOString()
    };
    list.push(newTip);
    this.writeTips(list);
    return newTip;
  }

  updateTip(id: string, changes: Partial<Tip>): Tip | null {
    const list = this.readTips();
    const i = list.findIndex(t => t.id === id);
    if (i === -1) return null;
    list[i] = { ...list[i], ...changes };
    this.writeTips(list);
    return list[i];
  }

  deleteTip(id: string): void {
    const list = this.readTips().filter(t => t.id !== id);
    this.writeTips(list);
  }

  toggleFavorite(id: string): Tip | null {
    const tip = this.getById(id);
    if (!tip) return null;
    return this.updateTip(id, { favorite: !tip.favorite });
  }

  // Filtros y búsqueda
  search(query: string): Tip[] {
    const q = query.trim().toLowerCase();
    if (!q) return this.getAll();
    return this.getAll().filter(t => t.title.toLowerCase().includes(q) || t.text.toLowerCase().includes(q));
  }

  filterByCategory(category?: TipCategory): Tip[] {
    if (!category) return this.getAll();
    return this.getAll().filter(t => t.category === category);
  }

  getFavorites(): Tip[] {
    return this.getAll().filter(t => t.favorite);
  }

  // --- Challenges ---

  private readChallenges(): Challenge[] {
    return JSON.parse(localStorage.getItem(CHALLENGES_KEY) || '[]');
  }

  private writeChallenges(list: Challenge[]) {
    localStorage.setItem(CHALLENGES_KEY, JSON.stringify(list));
  }

  getChallenges(): Challenge[] {
    return this.readChallenges();
  }

  incrementChallenge(id: string): Challenge | null {
    const list = this.readChallenges();
    const i = list.findIndex(c => c.id === id);
    if (i === -1) return null;
    if (list[i].progress < list[i].target) list[i].progress++;
    this.writeChallenges(list);
    return list[i];
  }

  resetChallengeProgress(id: string): void {
    const list = this.readChallenges();
    const i = list.findIndex(c => c.id === id);
    if (i === -1) return;
    list[i].progress = 0;
    this.writeChallenges(list);
  }
}

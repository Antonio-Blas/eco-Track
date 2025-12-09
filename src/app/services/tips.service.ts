import { Injectable } from '@angular/core';
import { Tip } from '../models/tip.model';

@Injectable({ providedIn: 'root' })
export class TipsService {
  private tips: Tip[] = [
    { id: 't1', category: 'transport', text: 'Intenta caminar para viajes cortos.' },
    { id: 't2', category: 'energy', text: 'Apaga los aparatos en standby.' },
    { id: 't3', category: 'recycling', text: 'Separa plásticos y papel.' }
  ];

  getAll(): Tip[] {
    return this.tips;
  }

  getByCategory(category: string): Tip[] {
    return this.tips.filter(t => t.category === category);
  }
}

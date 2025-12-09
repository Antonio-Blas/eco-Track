import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { TipsService, Tip } from '../../../../services/tips.service';

@Component({
  selector: 'app-tip-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tip-detail.html',
  styleUrls: ['./tip-detail.scss']
})
export class TipDetailComponent {
  tip: Tip | null = null;

  constructor(private route: ActivatedRoute, private svc: TipsService, private router: Router) {
    const id = String(this.route.snapshot.paramMap.get('id') || '');
    if (id) this.tip = this.svc.getById(id);
  }

  toggleFav() {
    if (!this.tip) return;
    this.svc.toggleFavorite(this.tip.id);
    this.tip = this.svc.getById(this.tip.id);
  }

  deleteAndClose() {
    if (!this.tip) return;
    if (!confirm('Eliminar este consejo?')) return;
    this.svc.deleteTip(this.tip.id);
    this.router.navigate(['/tips']);
  }
}

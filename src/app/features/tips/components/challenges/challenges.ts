import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsService, Challenge } from '../../../../services/tips.service';

@Component({
  selector: 'app-challenges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './challenges.html',
  styleUrls: ['./challenges.scss']
})
export class ChallengesComponent {
  challenges: Challenge[] = [];

  constructor(private svc: TipsService) {
    this.load();
  }

  load() {
    this.challenges = this.svc.getChallenges();
  }

  addProgress(id: string) {
    this.svc.incrementChallenge(id);
    this.load();
  }

  reset(id: string) {
    if (!confirm('Restablecer este reto?')) return;
    this.svc.resetChallengeProgress(id);
    this.load();
  }
}

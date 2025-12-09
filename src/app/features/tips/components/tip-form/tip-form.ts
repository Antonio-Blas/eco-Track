import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TipsService } from '../../../../services/tips.service';

@Component({
  selector: 'app-tip-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './tip-form.html',
  styleUrls: ['./tip-form.scss']
})
export class TipFormComponent {

  form: any; // ←✔ Declarado sin inicializar

  constructor(
    private fb: FormBuilder,
    private svc: TipsService,
    private router: Router
  ) {

    // ←✔ Ahora sí puedes crear el formulario
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      text: ['', [Validators.required, Validators.minLength(6)]],
      category: ['general', Validators.required]
    });
  }

  save() {
    if (this.form.invalid) return;

    this.svc.addTip(this.form.value as any);

    this.router.navigate(['/tips']);
  }
}

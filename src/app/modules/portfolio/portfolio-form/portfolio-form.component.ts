import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { Portfolio } from '../../../core/models/portfolio';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss'],
})
export class PortfolioFormComponent {
  constructor(
    private fb: FormBuilder,
    private portfolioService: PortfolioService,
    private router: Router
  ) {}

  form = this.fb.group({
    assetType: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.min(1)]],
    purchasePrice: ['', [Validators.required, Validators.min(0.01)]],
    purchaseDate: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.valid) {
      const portfolio: Portfolio = this.form.value as any;
      this.portfolioService.addPortfolio(portfolio).subscribe(() => {
        this.router.navigate(['/portfolio']);
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}

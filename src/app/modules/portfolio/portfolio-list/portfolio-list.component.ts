import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss'],
})
export class PortfolioListComponent implements OnInit {
  constructor(private portfolioService: PortfolioService) {}
  portfolios$!: Observable<any[]>;

  ngOnInit(): void {
    console.log('list component loading');
    this.portfolioService.getPortfolios().pipe(first()).subscribe();
    this.portfolios$ = this.portfolioService.portfolios$();
  }

  deletePortfolio(id: number) {
    if (confirm('Are you sure you want to delete this investment?')) {
      this.portfolioService.deletePortfolio(id).subscribe();
    }
  }
}

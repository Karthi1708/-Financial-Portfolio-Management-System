import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Portfolio } from '../models/portfolio';

@Injectable({ providedIn: 'root' })
export class SharedStateService {
  private portfolioSubject = new BehaviorSubject<Portfolio[]>([]);
  portfolio$ = this.portfolioSubject.asObservable();

  setPortfolios(portfolios: Portfolio[]) {
    this.portfolioSubject.next(portfolios);
  }
}

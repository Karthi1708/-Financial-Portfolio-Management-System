import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';
import { Portfolio } from '../models/portfolio';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private _portfolios$ = new BehaviorSubject<Portfolio[]>([]);
  constructor(private http: HttpClient) {}

  getPortfolios(): Observable<Portfolio[]> {
    if (!this._portfolios$?.value?.length) {
      const mockData: Portfolio[] = [
        {
          id: 1,
          assetType: 'Stock',
          quantity: 100,
          purchasePrice: 250,
          purchaseDate: '2025-07-01',
        },
        // {
        //   id: 2,
        //   assetType: 'Bond',
        //   quantity: 50,
        //   purchasePrice: 105,
        //   purchaseDate: '2025-06-20',
        // },
      ];
      return of(mockData).pipe(
        delay(300),
        tap((data) => this._portfolios$.next(data))
      );
    } else {
      return of(this._portfolios$.value).pipe(delay(100));
    }
  }

  portfolios$(): Observable<Portfolio[]> {
    return this._portfolios$.asObservable();
  }

  addPortfolio(newPortfolio: Portfolio): Observable<Portfolio> {
    console.log('newPortfolio', newPortfolio);
    const id = this._portfolios$.value.length + 1;
    console.log('value', id);
    const portfolioWithId = { ...newPortfolio, id };

    return of(portfolioWithId).pipe(
      delay(300),
      tap((portfolio) => {
        const updated = [...this._portfolios$.value, portfolio];
        this._portfolios$.next(updated);
        this._portfolios$.subscribe((data) => {
          console.log('data', data);
        });
      })
    );
  }

  deletePortfolio(id: number): Observable<void> {
    return of(undefined).pipe(
      delay(300),
      tap(() => {
        const updated = this._portfolios$.value.filter((p) => p.id !== id);
        this._portfolios$.next(updated);
      })
    );
  }

  // Get from API
  // getPortfolios(): Observable<Portfolio[]> {
  //   return this.http
  //     .get<Portfolio[]>(this.apiUrl)
  //     .pipe(tap((data) => this.portfoliosSubject.next(data)));
  // }

  // addPortfolio(portfolio: Portfolio): Observable<Portfolio> {
  //   return this.http
  //     .post<Portfolio>(this.apiUrl, portfolio)
  //     .pipe(tap(() => this.refreshPortfolios()));
  // }

  // updatePortfolio(id: number, portfolio: Portfolio): Observable<Portfolio> {
  //   return this.http
  //     .put<Portfolio>(`${this.apiUrl}/${id}`, portfolio)
  //     .pipe(tap(() => this.refreshPortfolios()));
  // }

  // deletePortfolio(id: number): Observable<void> {
  //   return this.http
  //     .delete<void>(`${this.apiUrl}/${id}`)
  //     .pipe(tap(() => this.refreshPortfolios()));
  // }

  // // Refresh local BehaviorSubject from server
  // private refreshPortfolios(): void {
  //   this.getPortfolios().subscribe();
  // }
}

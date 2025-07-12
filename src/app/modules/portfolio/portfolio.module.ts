import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: PortfolioListComponent },
  { path: 'add', component: PortfolioFormComponent },
];

@NgModule({
  declarations: [PortfolioFormComponent, PortfolioListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class PortfolioModule {}

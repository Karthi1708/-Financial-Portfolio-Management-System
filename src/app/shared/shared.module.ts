import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [CustomCurrencyPipe, TooltipDirective],
  imports: [CommonModule],
  exports: [CustomCurrencyPipe, TooltipDirective],
})
export class SharedModule {}

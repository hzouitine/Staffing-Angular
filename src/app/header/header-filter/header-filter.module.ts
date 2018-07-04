import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFilterComponent } from './header-filter.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { FilterOrderComponent } from './filter-order/filter-order.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderFilterComponent, FilterFormComponent, FilterOrderComponent],
  exports: [
    HeaderFilterComponent

  ]
})
export class HeaderFilterModule { }

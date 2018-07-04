import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFilterComponent } from './header-filter.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { FilterOrderComponent } from './filter-order/filter-order.component';
import { MaterialModule } from '../../module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule ,
    MaterialModule,
    FormsModule,
     ReactiveFormsModule
  ],
  declarations: [HeaderFilterComponent, FilterFormComponent, FilterOrderComponent],
  exports: [
    HeaderFilterComponent

  ]
})
export class HeaderFilterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSearchComponent } from './header-search.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CollapseExpandComponent } from './collapse-expand/collapse-expand.component';
import { MaterialModule } from '../../module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderSearchComponent,
    DateRangeComponent,
    PaginationComponent,
    CollapseExpandComponent],
  exports: [HeaderSearchComponent,
    DateRangeComponent,
    PaginationComponent,
    CollapseExpandComponent]
})
export class HeaderSearchModule { }

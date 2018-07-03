import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSearchComponent } from './header-search.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CollapseExpandComponent } from './collapse-expand/collapse-expand.component';
import { MaterialModule } from '../../module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    HeaderSearchComponent,
    DateRangeComponent,
    MonthSelectorComponent,
    PaginationComponent,
    CollapseExpandComponent]
  , exports: [HeaderSearchComponent,
    DateRangeComponent,
    MonthSelectorComponent,
    PaginationComponent,
    CollapseExpandComponent]
})
export class HeaderSearchModule { }

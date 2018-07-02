import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSearchComponent } from './header-search.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { MonthSelectorComponent } from './month-selector/month-selector.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ResourcesPagesComponent } from './resources-pages/resources-pages.component';
import { CollapseExpandComponent } from './collapse-expand/collapse-expand.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderSearchComponent,
    DateRangeComponent,
    MonthSelectorComponent,
    PaginationComponent,
    ResourcesPagesComponent,
    CollapseExpandComponent]
  , exports: [HeaderSearchComponent,
    DateRangeComponent,
    MonthSelectorComponent,
    PaginationComponent,
    ResourcesPagesComponent,
    CollapseExpandComponent]
})
export class HeaderSearchModule { }

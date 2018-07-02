import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderSearchModule } from './header-search/header-search.module';

import { HeaderFilterModule } from './header-filter/header-filter.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderSearchModule,
    HeaderFilterModule
  ],
  declarations: [HeaderComponent]
  , exports : [HeaderComponent]
})
export class HeaderModule { }

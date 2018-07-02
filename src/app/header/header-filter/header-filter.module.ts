import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFilterComponent } from './header-filter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderFilterComponent],
  exports: [
    HeaderFilterComponent

  ]
})
export class HeaderFilterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffingComponent } from './staffing.component';
import { StaffingHeaderComponent } from './staffing-header/staffing-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StaffingComponent, StaffingHeaderComponent],
  exports: [StaffingComponent]
})
export class StaffingModule { }

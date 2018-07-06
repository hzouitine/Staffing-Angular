import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffingComponent } from './staffing.component';
import { StaffingHeaderComponent } from './staffing-header/staffing-header.component';
import { StaffingBlockModule } from './staffing-block/staffing-block.module';

@NgModule({
  imports: [
    CommonModule,
    StaffingBlockModule
  ],
  declarations: [StaffingComponent, StaffingHeaderComponent],
  exports: [StaffingComponent]
})
export class StaffingModule { }

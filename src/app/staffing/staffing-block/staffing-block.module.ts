import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffingBlockComponent } from './staffing-block.component';
import { RowResourceComponent } from './row-resource/row-resource.component';
import { RowStaffingComponent } from './row-staffing/row-staffing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StaffingBlockComponent,
     RowResourceComponent,
      RowStaffingComponent],
  exports: [
    StaffingBlockComponent
    , RowResourceComponent,
     RowStaffingComponent]
})
export class StaffingBlockModule { }
 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffingBlockComponent } from './staffing-block.component';
import { RowResourceComponent } from './row-resource/row-resource.component';
import { RowStaffingComponent } from './row-staffing/row-staffing.component';
import { CreateStaffingComponent } from './create-staffing/create-staffing.component';
import { MaterialModule } from '../../module/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    StaffingBlockComponent,
     RowResourceComponent,
      RowStaffingComponent,
      CreateStaffingComponent],
  exports: [
    StaffingBlockComponent
    , RowResourceComponent,
     RowStaffingComponent],
     entryComponents : [CreateStaffingComponent]
})
export class StaffingBlockModule { }

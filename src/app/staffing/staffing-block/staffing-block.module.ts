import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffingBlockComponent } from './staffing-block.component';
import { RowResourceComponent } from './row-resource/row-resource.component';
import { RowStaffingComponent } from './row-staffing/row-staffing.component';
import { StaffingDetailsComponent } from './staffing-details/staffing-details.component';
import { MaterialModule } from '../../module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffingReduceComponent } from './staffing-details/staffing-reduce/staffing-reduce.component';
import { CreateStaffingComponent } from './create-staffing/create-staffing.component';
import { AddProjectComponent } from './add-project/add-project.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    StaffingBlockComponent,
     RowResourceComponent,
      RowStaffingComponent,
      CreateStaffingComponent,
      AddProjectComponent,
      StaffingDetailsComponent,
      StaffingReduceComponent],
  exports: [
    StaffingBlockComponent
    , RowResourceComponent,
     RowStaffingComponent,
     StaffingDetailsComponent,
     StaffingReduceComponent],
     entryComponents: [StaffingDetailsComponent, StaffingReduceComponent,
      CreateStaffingComponent,
      AddProjectComponent]
})
export class StaffingBlockModule { }

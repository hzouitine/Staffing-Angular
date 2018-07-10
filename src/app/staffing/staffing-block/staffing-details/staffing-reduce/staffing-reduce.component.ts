import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { StaffingDetailsComponent } from '../staffing-details.component';

@Component({
  selector: 'app-staffing-reduce',
  templateUrl: './staffing-reduce.component.html',
  styleUrls: ['./staffing-reduce.component.scss']
})
export class StaffingReduceComponent implements OnInit {
  reduceStaffingForm: FormGroup;
  from: any;
  to: any;
  minDate: any;
  dataStaffing;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<StaffingReduceComponent>,
    public dialogRefDetails: MatDialogRef<StaffingDetailsComponent>, ) {
    this.dataStaffing = data.staffingReduce;

    this.reduceStaffingForm = this.createReduceStaffingForm();
    this.from = new Date(this.dataStaffing.staffing.staffingPeriod.from);
    this.to = new Date(this.dataStaffing.staffing.staffingPeriod.to);

  }

  ngOnInit() {
  }
  createReduceStaffingForm() {
    console.log('this.dataStaffing', this.dataStaffing)
    return this.formBuilder.group({
      from: [this.dataStaffing.staffing.staffingPeriod.from],
      to: [this.dataStaffing.staffing.staffingPeriod.to],
    });


  }
  addEvent(from, to) {
    if (this.from !== undefined) {

      this.minDate = from;
    } else {
      this.minDate = to;

    }

  }

  cancel() {

    this.dialogRef.close();
  }
  reduceStaffing() {

    this.dialogRef.close();
  }

}

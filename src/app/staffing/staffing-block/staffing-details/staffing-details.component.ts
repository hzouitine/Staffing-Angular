import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { StaffingReduceComponent } from './staffing-reduce/staffing-reduce.component';

@Component({
  selector: 'app-staffing-details',
  templateUrl: './staffing-details.component.html',
  styleUrls: ['./staffing-details.component.scss']
})
export class StaffingDetailsComponent implements OnInit {
  filterForm: FormGroup;
  tableData: any;
  dialogRef: any;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, public dialog: MatDialog,
    public dialogRefDetails: MatDialogRef<StaffingDetailsComponent>) {


    this.tableData = data;

  }

  ngOnInit() {
  }

  reduceStaffing() {
    console.log('reduce staffing');
    this.dialogRef = this.dialog.open(StaffingReduceComponent, {
      panelClass: 'staffing-form-dialog',

      data: {
        staffingReduce: this.tableData,
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
    });



  }

  cancel() {
    this.dialogRefDetails.close();

  }
}

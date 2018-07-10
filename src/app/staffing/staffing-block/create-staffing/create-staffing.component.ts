import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '../../../../../node_modules/@angular/material';
import { AddProjectComponent } from '../add-project/add-project.component';

@Component({
  selector: 'app-create-staffing',
  templateUrl: './create-staffing.component.html',
  styleUrls: ['./create-staffing.component.scss']
})
export class CreateStaffingComponent implements OnInit {

  checkboxes = [{label : 'All week'}, {label : 'Monday'}
, {label : 'Tuesday'}, {label : 'Wednsday'}
, {label : 'Thursday'}, {label : 'Friday'}
, {label : 'Saturday'}, {label : 'Sunday'}] ;

  constructor(
    public dialogRef: MatDialogRef<CreateStaffingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public addDialog: MatDialog) { }

  ngOnInit() {
  }

  addProjectDialog() {
    const dialogRef = this.addDialog.open(AddProjectComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

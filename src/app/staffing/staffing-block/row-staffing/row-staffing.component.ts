import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { StaffingDetailsComponent } from '../staffing-details/staffing-details.component';

@Component({
  selector: '[app-row-staffing]',
  templateUrl: './row-staffing.component.html',
  styleUrls: ['./row-staffing.component.scss']
})
export class RowStaffingComponent implements OnInit {

  @Input() dureeStaffing = [];
  dragov: boolean = false;
  draggedTd: any = null;
  dialogRef: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  onDragstart(e) {
    console.log();

    this.draggedTd = e.target;
    console.log(e.target);
  }

  onDragover(e) {
    console.log(e.target);
    if (e.target.tagName.toUpperCase() === "TD" && !e.target.querySelector("button") && this.draggedTd) {
      e.target.classList.add('bg-info');
      e.preventDefault();
      e.stopPropagation();
    }
    else {
      e.target.classList.add('bg-danger');

    }
  }
  onDragleave(e) {
    e.target.classList.remove('bg-info');
    e.target.classList.remove('bg-danger');
    e.preventDefault();
    e.stopPropagation();

  }

  onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove('bg-info');
    e.target.classList.remove('bg-danger');
    e.target.append(this.draggedTd.querySelector("button"));
    this.draggedTd = null;
  }
  detailStaffing() {
    // let leave: Leave;
    const staffing = {
      title: 'Resource X Staffing-details',
      staffingPeriod: { from: '2018-07-19', to: '2018-07-19', Duration: '8h' },
      projectInformation: { projectName: 'Timesheet', projectManager: 'Hicham El barouti' },
      comment: 'test test',
      staffingHistory: [{
        actionDate: '2018-07-05 10:58:15',
        performedBy: 'El BAROUTI Hicham',
        actionType: 'Created with resize option'
      },
      {
        actionDate: '2018-07-06 10:58:15',
        performedBy: 'El BAROUTI Hicham',
        actionType: 'Created with resize option'
      }]
    };

    console.log('staffing', staffing);

    this.dialogRef = this.dialog.open(StaffingDetailsComponent, {
      panelClass: 'staffing-form-dialog',
      width: '1000px',
      data: {
        staffing: staffing,
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });

  }

}

import { Component, OnInit, Input } from '@angular/core';

import { MatDialog } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { StaffingDetailsComponent } from '../staffing-details/staffing-details.component';
import * as moment from 'moment';
import { CreateStaffingComponent } from '../create-staffing/create-staffing.component';


@Component({
  selector: '[app-row-staffing]',
  templateUrl: './row-staffing.component.html',
  styleUrls: ['./row-staffing.component.scss']
})
export class RowStaffingComponent implements OnInit {

  @Input() dureeStaffing = [];
  @Input() project: string;
  @Input() startDate;
  dragov = false;
  draggedTd: any = null;
  draggedItem: any = null;

  dialogRef: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }


  calculate(e) {
    const width = 40;
    e.target.style.zIndex = "0";
    const w = parseInt(window.getComputedStyle(e.target, null).getPropertyValue("width"));
    const num = Math.floor(w / width) + (w % width > width / 2 ? 1 : 0);
    console.log("number of days", num);
  }

  onMousedown(e) {
    e.target.style.zIndex = "1";
  }
  onDragstart(e,item) {
    this.draggedTd = e.target;
    this.draggedItem = item;

  }

  onDragover(e) {
    if (e.target.tagName.toUpperCase() === 'TD' && !e.target.querySelector('div') && this.draggedTd) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  onDragend() {
    this.draggedTd = null;
    this.draggedItem = null;

  }
  onDrop(e, index) {
    const MomentToPutItemOn = moment(this.startDate, 'YYYY-MM-DD');
    const dateToPutItemOn = MomentToPutItemOn.add(index, 'days').format('YYYY-MM-DD')
    console.log(dateToPutItemOn);
    console.log(this.draggedItem);

    e.preventDefault();
    e.stopPropagation();
    e.target.append(this.draggedTd.querySelector('div'));
    this.draggedTd = null;
    this.draggedItem = null;

  }

  detailStaffing( ) {

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

    this.dialogRef = this.dialog.open(StaffingDetailsComponent, {
      panelClass: 'staffing-form-dialog',
      width: '60%',
      height: '100%',
      data: {
        staffing: staffing,
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });

  }

}

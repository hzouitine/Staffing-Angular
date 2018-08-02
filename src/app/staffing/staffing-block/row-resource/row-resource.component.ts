import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreateStaffingComponent } from '../create-staffing/create-staffing.component';
import { MatDialog } from '../../../../../node_modules/@angular/material';


@Component({
  selector: '[app-row-resource]',
  templateUrl: './row-resource.component.html',
  styleUrls: ['./row-resource.component.scss']
})
export class RowResourceComponent implements OnInit {

  @Input() statusStaffing;
  @Input() resourceInfo;
  @Output() size = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  createModel() {
    const dialogRef = this.dialog.open(CreateStaffingComponent, {
      height: '100%',
      width: '60%',
      data: { resourceName: this.resourceInfo.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.size.emit(1);
      }
    });
  }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log('statusStaffing', this.statusStaffing);
  }
}

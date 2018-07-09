import { Component, OnInit, Input } from '@angular/core';
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
  
  constructor(public dialog: MatDialog) {

  }

  createModel() {
    const dialogRef = this.dialog.open(CreateStaffingComponent, {
      height : "100%",
      data: { resourceName : this.resourceInfo.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../../node_modules/@angular/material';
import { ResourcesListComponent } from './resources-list/resources-list.component';

@Component({
  selector: 'app-add-resources',
  templateUrl: './add-resources.component.html',
  styleUrls: ['./add-resources.component.scss']
})
export class AddResourcesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  createModel() {
    const dialogRef = this.dialog.open(ResourcesListComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit() {
  }

}

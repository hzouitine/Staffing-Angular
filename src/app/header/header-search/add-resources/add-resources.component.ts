import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../../node_modules/@angular/material';
import { ResourcesListComponent } from './resources-list/resources-list.component';

@Component({
  selector: 'app-add-resources',
  templateUrl: './add-resources.component.html',
  styleUrls: ['./add-resources.component.scss']
})
export class AddResourcesComponent implements OnInit {
  length = [];
  constructor(public dialog: MatDialog) { }

  createModel() {
    const dialogRef = this.dialog.open(ResourcesListComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.length.push('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350');
    });
  }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../../node_modules/@angular/material';
import { ResourcesListComponent } from './resources-list/resources-list.component';

@Component({
  selector: 'app-add-resources',
  templateUrl: './add-resources.component.html',
  styleUrls: ['./add-resources.component.scss']
})
export class AddResourcesComponent implements OnInit {
  length = ['https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5eKx_XhVZbi5LScv9nJ1uIZ8nShsCDKNUOje9j6d-XkNXYwiHA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoeJRHEgvxBWiUky6Us0FMQyk9W7BQzy8XjnQl2npL6ZHCO9w',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UZao3vkPeKiuVego9dDzWzF2rEh8qOKKfrk8ddLgNA9wXcIq',
    'https://pmctvline2.files.wordpress.com/2016/05/person-of-interest-root-dies-amy-acker.jpg?w=620&h=415&crop=1'
  ];
  constructor(public dialog: MatDialog) { }

  createModel() {
    const dialogRef = this.dialog.open(ResourcesListComponent);
    dialogRef.afterClosed().subscribe(result => {

    });
  }


  ngOnInit() {
  }

}

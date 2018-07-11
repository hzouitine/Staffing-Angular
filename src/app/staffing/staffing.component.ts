import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss']
})
export class StaffingComponent implements OnInit {
   
  constructor() { }

  ngOnInit() {
    console.log('momment', moment.locale());
  }
  

}

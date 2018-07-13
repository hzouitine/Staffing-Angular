import { Component, OnInit, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { data } from './data';
@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss']
})
export class StaffingComponent implements OnInit, OnChanges {
  data: any;
  constructor() { }

  ngOnInit() {
    this.data = data;
  }
  ngOnChanges() {
console.log('ngOnChanges StaffingComponent');
    this.data = data;
  }

}

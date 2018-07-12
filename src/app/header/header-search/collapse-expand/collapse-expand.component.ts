import { Component, OnInit } from '@angular/core';
import { data } from '../../../staffing/data';
import * as moment from 'moment';
@Component({
  selector: 'app-collapse-expand',
  templateUrl: './collapse-expand.component.html',
  styleUrls: ['./collapse-expand.component.scss']
})
export class CollapseExpandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click() {
    data.from = moment(data.from, 'DD-MM-YYYY').add(30, 'days').format('DD-MM-YYYY');
    data.to = moment(data.to, 'DD-MM-YYYY').add(30, 'days').format('DD-MM-YYYY');

    console.log('CollapseExpandComponent', data);
  }
}

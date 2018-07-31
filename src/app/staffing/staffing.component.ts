import { Component, OnInit, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { data } from './data';
import { FetchDataService } from '../services/fetch-data.service';
@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss']
})
export class StaffingComponent implements OnInit, OnChanges {
  data: any;
  constructor(private fetchDataService: FetchDataService) {


  }

  ngOnInit() {
    this.data = data;
    this.fetchDataService.getData('2018-07-30', '2018-08-01')
      .subscribe(res =>
        console.log('res', res)
      );
  }
  ngOnChanges() {
    console.log('ngOnChanges StaffingComponent');
    this.data = data;
  }

}

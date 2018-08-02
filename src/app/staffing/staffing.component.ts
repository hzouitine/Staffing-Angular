import { Component, OnInit, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { data } from './data';
import { FetchDataService } from '../services/fetch-data.service';
import { DateService } from '../services/date.service';
@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss']
})
export class StaffingComponent implements OnInit {
  data: any;
  toDate: any;
  fromDate: any;
  constructor(private fetchDataService: FetchDataService,
    private dataService: DateService) {
    this.fromDate = moment().format('YYYY-MM-DD');
    this.toDate = moment().add(2, 'M').format('YYYY-MM-DD');
    dataService.$date.subscribe(date => {
      this.fromDate = date.fromDate;
      this.toDate = date.toDate;
      this.fetchData();
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    console.log("##FetchDAta");
    console.log(this.fromDate);
    console.log(this.toDate);
    this.fetchDataService.getData(this.fromDate, this.toDate)
      .subscribe(res =>
        console.log('res', res)
      );
  }

}

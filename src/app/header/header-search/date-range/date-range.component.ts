import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { data } from '../../../staffing/data';
import * as moment from 'moment';
import { DateService } from '../../../services/date.service';
@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent implements OnInit {
  dateRangeForm: FormGroup;
  startDate: any;
  fromDate: string;
  toDate: string;
  constructor(private formBuilder: FormBuilder,
    private dataService: DateService) {

    this.fromDate = moment().format('YYYY-MM-DD');
    this.toDate = moment().add(2, 'M').format('YYYY-MM-DD');

    this.dateRangeForm = new FormGroup({
      startDate: new FormControl()
    });
  }

  ngOnInit() {

  }
  addEvent() {
    this.fromDate = moment(this.dateRangeForm.get('startDate').value).format('YYYY-MM-DD');
    this.toDate = moment(this.dateRangeForm.get('startDate').value).add(2, 'M').format('YYYY-MM-DD');
    this.dataService.dateChanged(this.fromDate, this.toDate);

  }
  navigate(value) {
    if (value === 1) {
      this.fromDate = moment(this.fromDate, 'YYYY-MM-DD').add(2, 'M').format('YYYY-MM-DD');
      this.toDate = moment(this.toDate, 'YYYY-MM-DD').add(2, 'M').format('YYYY-MM-DD');
    } else if (value === -1) {
      this.fromDate = moment(this.fromDate, 'YYYY-MM-DD').subtract(2, 'M').format('YYYY-MM-DD');
      this.toDate = moment(this.toDate, 'YYYY-MM-DD').subtract(2, 'M').format('YYYY-MM-DD');
    }

    this.dateRangeForm.get('startDate').setValue(this.fromDate);
    this.dataService.dateChanged(this.fromDate, this.toDate);
  }




}

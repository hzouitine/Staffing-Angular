import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { data } from '../../../staffing/data';
import * as moment from 'moment';
@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent implements OnInit {
  dateRangeForm: FormGroup;
  startDate: any;
  endDate: any;
  minDate: Date;
  constructor(private formBuilder: FormBuilder) {

    this.dateRangeForm = new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl()
    });
  }

  ngOnInit() {

  }
  addEvent(startDate) {

    data.from = moment(startDate).format('DD-MM-YYYY');
    data.to = moment(startDate).add(2, 'M').format('DD-MM-YYYY');
    
    console.log('startDate', startDate);
    console.log('data', data);
  }

}

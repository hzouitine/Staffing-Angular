import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

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
  constructor() {

    this.dateRangeForm = new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl()
    });
  }

  ngOnInit() {

  }
  addEvent(startDate, endDate) {
    this.minDate = startDate;
    console.log('startDate', startDate);
    console.log('endDate', endDate);
  }

}

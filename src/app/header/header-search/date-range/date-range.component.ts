import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
  addEvent(startDate, endDate) {
    if (this.startDate !== undefined) {

      this.minDate = startDate;
    }

    else{
      this.minDate = endDate;

    }

    console.log('startDate', startDate);
    console.log('endDate', endDate);
  }

}

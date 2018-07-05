import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-staffing-header]',
  templateUrl: './staffing-header.component.html',
  styleUrls: ['./staffing-header.component.scss']
})
export class StaffingHeaderComponent implements OnInit {
  months = [{
    month: "July 2018",
    numberOfWeeks: 4
  },
  {
    month: "August 2018",
    numberOfWeeks: 4
  }];
  weeks = [1, 2, 3, 4, 5, 6, 7, 8]
  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25,26]
  data = {
    "months": [{
      "month": "July 2018",
      "weeks": [
        {
          week: 66,
          days: [1, 2, 3, 4, 5, 6, 7]
        },
        {
          week: 23,
          days: [11, 12, 13, 41, 15, 16, 71]
        },
        {
          week: 62,
          days: [1, 2, 3, 4, 5, 6, 7]
        },
        {
          week: 63,
          days: [11, 12, 13, 41, 15, 16, 71]
        }
      ]
    },
    {
      "month": "August 2018",
      "weeks": [
        {
          week: 77,
          days: [1, 2, 3, 4, 5, 6, 7]
        },
        {
          week: 87,
          days: [11, 12, 13, 41, 15, 16, 71]
        }
      ]
    }]
  };



  constructor() { }

  ngOnInit() {
  }

}

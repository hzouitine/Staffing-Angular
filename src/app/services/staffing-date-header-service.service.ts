import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class StaffingDateHeaderServiceService {

  /*
  months : [{
    month : {
      monthName
      weeks : [{
        week : {
        weekName
        days : [numbers]
      }
    }]
    }
  }]
  */
  constructor() { }

  dataStaffingHeader = [];
  from: string;
  to: string;
  table = [];

  getObject() {

    this.table = [];
    let dateFrom = moment(this.from, "DD-MM-YYYY");
    let dateTo = moment(this.to, "DD-MM-YYYY");

    const weekFrom = dateFrom.weeks();
    const weekTo = dateTo.weeks();
    let week = moment(this.from, "DD-MM-YYYY");

    while (week.week() <= weekTo) {
      if (week.week() === weekFrom) {
        this.table.push({
          weekName: week.week(),
          dayFrom: dateFrom.date(),
          dayTo: week.endOf('week').date(),
          month: week.month(),
          days: []
        });
      } else if (week.week() === weekTo) {
        this.table.push({
          weekName: week.week(),
          dayFrom: week.startOf('week').date(),
          dayTo: dateTo.date(),
          month: week.month(),
          days: []
        });
      } else {
        this.table.push({
          weekName: week.week(),
          dayFrom: week.startOf('week').date(),
          dayTo: week.endOf('week').date(),
          month: week.month(),
          days: []

        });
      }
      week.add(1, 'w');
    }


    //console.log(this.table);
    console.log("StaffingDateHeaderServiceService", moment.locale());
  }


  addMonths() {
    let monthFrom = moment(this.from, "DD-MM-YYYY").month();
    const monthTo = moment(this.to, "DD-MM-YYYY").month();
    while (monthFrom <= monthTo) {
      this.dataStaffingHeader.push({ monthName: monthFrom, weeks: [] });
      monthFrom++;
    }
  }


  addWeeks() {
    this.dataStaffingHeader.forEach((item) => {
      this.table
        .filter((itm) => itm.month === item.monthName)
        .forEach(week => item.weeks.push({ weekName: week.weekName, days: week.days }));
    });
  }

  addDays() {
    this.table
      .forEach(item => {
        let day = item.dayFrom;
        while (day <= item.dayTo) {
          item.days.push(day);
          day++;
        }
      });
  }
  parse(form, to) {
    this.from = form;
    this.to = to;
    this.getObject();
    this.addMonths();
    this.addDays();
    this.addWeeks();

    console.log('table', this.table);
    console.log('this.dataStaffingHeader', this.dataStaffingHeader);

  }
}

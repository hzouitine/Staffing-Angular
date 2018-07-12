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

  dataStaffingHeader = {
    months: [],
    weeks: [],
    days: []
  };
  from: string;
  to: string;
  table = [];
  getObject() {

    this.table = [];
    let dateFrom = moment(this.from, 'DD-MM-YYYY');
    let dateTo = moment(this.to, 'DD-MM-YYYY');

    const weekFrom = dateFrom.weeks();
    const weekTo = dateTo.weeks();
    let week = moment(this.from, 'DD-MM-YYYY');

    while (week.week() <= weekTo || (week.week() > weekTo && dateTo.year() > week.year())) {
      if (week.week() === weekFrom) {
        this.table.push({
          weekName: week.week(),
          dayFrom: dateFrom,
          dayTo: moment(week.endOf('week')),
          month: week.month(),
          days: []
        });
      } else if (week.week() === weekTo) {
        this.table.push({
          weekName: week.week(),
          dayFrom: moment(week.startOf('week')),
          dayTo: dateTo,
          month: week.month(),
          days: []
        });
      } else {
        this.table.push({
          weekName: week.week(),
          dayFrom: moment(week.startOf('week')),
          dayTo: moment(week.endOf('week')),
          month: week.month(),
          days: []

        });
      }
      week.add(1, 'w');
    }



  }


  addMonths() {
    let monthFrom = moment(this.from, 'DD-MM-YYYY');
    const monthTo = moment(this.to, 'DD-MM-YYYY');
    while (monthFrom.isSameOrBefore(monthTo, 'month') || (
      monthTo.isBefore(monthFrom, 'month') && monthTo.year() > monthFrom.year())) {
      this.dataStaffingHeader.months.push({ month: moment(monthFrom) });
      monthFrom.add(1, 'months');
    }

  }


  addWeeks() {
    this.dataStaffingHeader.months.forEach((item) => {
      let weeks = this.table.filter((itm) => itm.month === item.month.month());
      item.week = weeks.map(week => week.days.length).reduce((accumulator, currentValue) => accumulator + currentValue);
      weeks.forEach(week => this.dataStaffingHeader.weeks.push({ week: week.weekName, dayNum: week.days.length }));

    });

  }

  addDays() {
    /* de prefence push date a la place de number a refaire**/
    this.table
      .forEach(item => {

        let from = moment(item.dayFrom);

        while (from.isSameOrBefore(item.dayTo) ||
          (item.dayTo.isBefore(from) && item.dayTo.year() > from.year())) {
          item.days.push(from.date());
          this.dataStaffingHeader.days.push(from.date());
          from.add(1, 'days');
        }
      });
  }

  formatMonths() {
    this.dataStaffingHeader.months.forEach(element => { element.month = element.month.format("MMM YYYY"); });
  }
  parse(form, to) {
    this.from = form;
    this.to = to;
    this.dataStaffingHeader = {
      months: [],
      weeks: [],
      days: []
    };
    this.getObject();
    this.addMonths();
    this.addDays();
    this.addWeeks();
    this.formatMonths();

    console.log('table', this.table);
    console.log('this.dataStaffingHeader', this.dataStaffingHeader);
    return this.dataStaffingHeader;
  }

}

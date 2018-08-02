import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ParseDataService {

  constructor() { }

  dataToStaffings(staffings, fromDate, toDate) {
    const date = moment(fromDate, 'YYYY-MM-DD');
    const endDate = moment(toDate, 'YYYY-MM-DD');
    const length = endDate.diff(date, 'days');
    const range = new Array(length);
    staffings.forEach((item) => {
      const index = -1 * moment(fromDate, 'YYYY-MM-DD').diff(moment(item.dateStaffing), 'days');
      range[index] = item;
    });
    return range;
  }

}

import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ParseDataService {

  constructor() { }

  dataToResourceInfo(staffings, fromDate, toDate) {
    const date = moment(fromDate, 'YYYY-MM-DD');
    const endDate = moment(toDate, 'YYYY-MM-DD');
    const range = new Array(endDate.diff(date, 'days'));
    staffings.forEach((item ) => {
      const index = -1 * moment(fromDate, 'YYYY-MM-DD').diff(moment(item.dateStaffing), 'days');
      range[index] = item;
    });
    console.log('rang', range);
  }

}

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

  dataToResourceInfo(resourceData) {
    return {
      id: resourceData.id,
      name: resourceData.name,
      loc: resourceData.loc,
      tech: resourceData.tech,
      M: '',
      M1: '',
      M2: '',
      M3: '',
      M4: '',
      Year: ''
    };
  }

  parseStatusStaffings(statusStaffings, fromDate, toDate) {
    const date = moment(fromDate, 'YYYY-MM-DD');
    const endDate = moment(toDate, 'YYYY-MM-DD');
    const length = endDate.diff(date, 'days');
    const status = new Array(length);
    statusStaffings.forEach((item) => {
      const index = -1 * moment(fromDate, 'YYYY-MM-DD').diff(moment(item.dateStatusStaffing), 'days');
      status[index] = item;
    });
    return status;
  }


}

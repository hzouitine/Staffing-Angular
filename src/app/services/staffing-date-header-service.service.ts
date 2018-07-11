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

  getObject(from, to) {
    let  date1 = moment(from);
    let date2=moment(to); 
    console.log('date1',date1);

    console.log("StaffingDateHeaderServiceService");
  }
}

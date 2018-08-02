import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

class Date {
  fromDate: any;
  toDate: any;
}

@Injectable({
  providedIn: 'root'
})
export class DateService {

  date = new Subject<Date>();

  $date = this.date.asObservable();

  constructor() { }

  dateChanged(fromDate, toDate) {
    const d = new Date();
    d.fromDate = fromDate;
    d.toDate = toDate;
    this.date.next(d);
  }
}

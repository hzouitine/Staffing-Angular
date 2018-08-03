import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '../../../node_modules/@angular/common/http';
import { FetchDataService } from './fetch-data.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CrudStaffingService {

  url = 'http://localhost:8080/';

  protected headers: any;
  protected options: any;
  constructor(private httpClient: HttpClient,
    private fetchDataService: FetchDataService) { }


  updateStaffing(item, date, dateFrom) {
    let httpParamps = new HttpParams().set('date', date);
    const dateTo = moment(dateFrom, 'YYYY-MM-DD').add(2, 'M').format('YYYY-MM-DD');
    this.httpClient.post(this.url + 'updateStaffing', item, { params: httpParamps })
      .subscribe(() => {
        this.fetchDataService.getData(dateFrom, dateTo);
      });

  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudStaffingService {

  url = 'http://localhost:8080/';

  protected headers: any;
  protected options: any;
  constructor(private httpClient: HttpClient) { }


  updateStaffing(item, date) {
    let httpParamps = new HttpParams().set('date', date);
    this.httpClient.post(this.url + 'updateStaffing', item, { params: httpParamps })
      .subscribe(() => console.log('updateStaffing'));
  }
}

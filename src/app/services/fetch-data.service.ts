import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Options } from '../../../node_modules/@types/selenium-webdriver/firefox';
import { Headers, RequestOptions } from '@angular/http';
import { Subject } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  url = 'http://localhost:8080/';

  protected headers: any;
  protected options: any;
  constructor(private httpClient: HttpClient) { }

  data = new Subject<any>();
  $data = this.data.asObservable();

  getData(dateFrom, dateTo) {
    this.headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
    let httpParamps = new HttpParams().set('fromDate', dateFrom).set('toDate', dateTo);

    console.log(httpParamps);
    this.options = { headers: this.headers, params: httpParamps };
    this.httpClient.get(this.url + 'getDataBetween', this.options)
      .subscribe((res) => {
        console.log('getData(dateFrom, dateTo)', res);
        this.data.next(res);
      });


  }

}

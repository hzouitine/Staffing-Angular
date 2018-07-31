import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Options } from '../../../node_modules/@types/selenium-webdriver/firefox';
import { Headers, RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  url = 'http://localhost:8080/';

  protected headers: any;
  protected options: any;
  constructor(private httpClient: HttpClient) { }


  getData(dateFrom, dateTo) {
    this.headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
    let httpParamps = new HttpParams().set('fromDate', dateFrom).set('toDate', dateTo);

    console.log(httpParamps);
    this.options = { headers: this.headers, params: httpParamps };

    return this.httpClient.get(this.url + 'getDataBetween', this.options);

  }

}

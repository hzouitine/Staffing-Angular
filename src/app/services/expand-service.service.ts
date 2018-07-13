import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpandServiceService {

  expand = new Subject<string>();

  $expand = this.expand.asObservable();
  constructor() {

  }

  sendExpand(e: boolean) {
    this.expand.next(e);
  }

}

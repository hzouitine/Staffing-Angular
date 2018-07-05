import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-staffing-header]',
  templateUrl: './staffing-header.component.html',
  styleUrls: ['./staffing-header.component.scss']
})
export class StaffingHeaderComponent implements OnInit {
  daynumber  = ["1","2","3","4","5"];
  constructor() { }

  ngOnInit() {
  }

}

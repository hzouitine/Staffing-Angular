import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-row-staffing]',
  templateUrl: './row-staffing.component.html',
  styleUrls: ['./row-staffing.component.scss']
})
export class RowStaffingComponent implements OnInit {

  dureeStaffing = [];

  constructor() { }

  ngOnInit() {

    let d = ["1d", "1/2d",""];
    for (let i = 0; i < 56; i++) {
      this.dureeStaffing.push(d[Math.floor(d.length * Math.random())]);
    }
  }

}

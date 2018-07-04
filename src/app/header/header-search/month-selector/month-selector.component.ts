import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-selector',
  templateUrl: './month-selector.component.html',
  styleUrls: ['./month-selector.component.scss']
})
export class MonthSelectorComponent implements OnInit {

  private selectedMonth: number = 0;
  private months: Array<string>;

  constructor() {
    this.months = ['M', 'M+1', 'M+2', 'M+3', 'M+4'];
  }

  ngOnInit() {
  }

  searchByMonth(index) {
    this.selectedMonth = index;
    console.log(this.months[index]);
  }
}

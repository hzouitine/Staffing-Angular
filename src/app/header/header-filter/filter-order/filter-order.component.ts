import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-order',
  templateUrl: './filter-order.component.html',
  styleUrls: ['./filter-order.component.scss']
})
export class FilterOrderComponent implements OnInit {
  private selectedMonth: number = -1;
  private orderbyLabels: Array<string>;
  constructor() { 
    this.orderbyLabels = ['M', 'M+1', 'M+2', 'M+3', 'M+4', 'Year'];

  }

  ngOnInit() {
  }

  orderBy(index) {
    this.selectedMonth = index;
    console.log("order by "+this.orderbyLabels[index]);
  }

}

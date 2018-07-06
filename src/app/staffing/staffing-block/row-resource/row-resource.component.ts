import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-row-resource]',
  templateUrl: './row-resource.component.html',
  styleUrls: ['./row-resource.component.scss']
})
export class RowResourceComponent implements OnInit {

  @Input() statusStaffing;
  @Input() resourceInfo;
  
  constructor() {

  }

  ngOnInit() {

      }

}

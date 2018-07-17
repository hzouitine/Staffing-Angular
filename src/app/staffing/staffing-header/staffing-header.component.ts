import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { StaffingDateHeaderServiceService } from '../../services/staffing-date-header-service.service';

@Component({
  selector: '[app-staffing-header]',
  templateUrl: './staffing-header.component.html',
  styleUrls: ['./staffing-header.component.scss']
})
export class StaffingHeaderComponent implements OnInit, OnChanges {
  @Input() from;
  @Input() to;
  data;
  constructor(private staffingDateHeaderServiceService: StaffingDateHeaderServiceService) { }

  ngOnInit() {
    //console.log('from', this.from);
    //console.log('to', this.to);
    this.data = this.staffingDateHeaderServiceService.parse(this.from, this.to);
  }

  ngOnChanges() {
    //console.log('ngOnChanges in heaader');
    this.data = this.staffingDateHeaderServiceService.parse(this.from, this.to);
  }

}

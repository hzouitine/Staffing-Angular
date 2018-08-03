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
    this.data = this.staffingDateHeaderServiceService.parse(this.from, this.to);
  }

  ngOnChanges() {
    this.data = this.staffingDateHeaderServiceService.parse(this.from, this.to);
  }

}

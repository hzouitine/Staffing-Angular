import { Component, OnInit, Output, OnChanges, Input } from '@angular/core';
import { data } from '../data';
import { StaffingDateHeaderServiceService } from '../../services/staffing-date-header-service.service';
import { ExpandServiceService } from '../../services/expand-service.service';
import { ParseDataService } from '../../services/parse-data.service';

@Component({
  selector: '[app-staffing-block]',
  templateUrl: './staffing-block.component.html',
  styleUrls: ['./staffing-block.component.scss']
})
export class StaffingBlockComponent implements OnInit, OnChanges {

  @Input() from;
  @Input() to;
  @Input() data;

  expand = true;
  constructor(private staffingServiceHeader: StaffingDateHeaderServiceService
    , private expandServiceService: ExpandServiceService,
    private parseDataService: ParseDataService) {
    expandServiceService.$expand.subscribe(e => this.expand = e);
  }

  ngOnInit() {
  }

  increment(e) {
    //
  }

  ngOnChanges() {

  }

}

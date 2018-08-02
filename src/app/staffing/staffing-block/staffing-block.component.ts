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
  resourceInfo = {
    name: "ResourcePercall", Loc: "Sale", Tech: "SI", M: "100%", M1: "100%", M2: "100%", M3: "100%", M4: "100%", Year: "100%",
  };
  @Input() from;
  @Input() to;
  @Input() data;

  project: string = "Staffing Project";
  statusStaffing = [];
  dureeStaffing = [];
  size;
  expand = true;
  constructor(private staffingServiceHeader: StaffingDateHeaderServiceService
    , private expandServiceService: ExpandServiceService,
    private parseDataService: ParseDataService) {
    expandServiceService.$expand.subscribe(e => this.expand = e);
  }

  tabDureeStaffing() {
    let tab = [];
    let d = ["1d", "1/2d", ""];

    for (let i = 0; i < this.size; i++) {
      tab.push(d[Math.floor(d.length * Math.random())]);
    }
    this.dureeStaffing.push(tab);
  }
  ngOnInit() {
    this.dureeStaffing = [];
    this.statusStaffing = [];

    this.size = this.staffingServiceHeader.parse(this.from, this.to).days.length;


    let colors = ["bg-success", "bg-danger", "bg-secondary"];
    for (let i = 0; i < this.size; i++) {
      this.statusStaffing.push(colors[Math.floor(colors.length * Math.random())] + " px-0 py-2");
    }
    this.tabDureeStaffing();

  }
  increment(e) {
    this.tabDureeStaffing();
  }

  ngOnChanges() {
    this.dureeStaffing = [];
    this.statusStaffing = [];
    this.size = this.staffingServiceHeader.parse(this.from, this.to).days.length;
    let colors = ["bg-success", "bg-danger", "bg-secondary"];
    for (let i = 0; i < this.size; i++) {
      this.statusStaffing.push(colors[Math.floor(colors.length * Math.random())] + " px-0 py-2");
    }
    this.tabDureeStaffing();
  }

}

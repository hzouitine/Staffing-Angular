import { Component, OnInit } from '@angular/core';
import { data } from '../../../staffing/data';
import * as moment from 'moment';
import { ExpandServiceService } from '../../../services/expand-service.service';
@Component({
  selector: 'app-collapse-expand',
  templateUrl: './collapse-expand.component.html',
  styleUrls: ['./collapse-expand.component.scss']
})
export class CollapseExpandComponent implements OnInit {

  constructor(private expandServiceService: ExpandServiceService) { }

  ngOnInit() {
  }

  click(e: boolean) {
    this.expandServiceService.sendExpand(e);
  }
}

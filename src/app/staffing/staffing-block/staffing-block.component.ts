import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-staffing-block]',
  templateUrl: './staffing-block.component.html',
  styleUrls: ['./staffing-block.component.scss']
})
export class StaffingBlockComponent implements OnInit {

  resourceInfo = {
    name: "Leo Messi", Loc: "Sale", Tech: "SI", M: "100%", M1: "100%", M2: "100%", M3: "100%", M4: "100%", Year: "100%",
  }

  statusStaffing = [];
  dureeStaffing = [];
  
  constructor() { }

  ngOnInit() {
    let colors = ["bg-success", "bg-danger", "bg-secondary"];
    for (let i = 0; i < 56; i++) {
      this.statusStaffing.push(colors[Math.floor(colors.length * Math.random())]+" px-0 py-2");
    }
    
    let d = ["1d", "1/2d",""];
    for (let i = 0; i < 56; i++) {
      this.dureeStaffing.push(d[Math.floor(d.length * Math.random())]);
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-row-resource]',
  templateUrl: './row-resource.component.html',
  styleUrls: ['./row-resource.component.scss']
})
export class RowResourceComponent implements OnInit {

  resourceproject1 = {
    name: "Hamza Zouitine", Loc: "Sale", Tech: "SI", M: "100%", M1: "100%", M2: "100%", M3: "100%", M4: "100%", Year: "100%",
  }
  resourceproject2 = { name: "Soufiane Najim", Loc: "Sale", Tech: "SI", M: "100%", M1: "100%", M2: "100%", M3: "100%", M4: "100%", Year: "100%" }

  statusStaffing = [];

  constructor() {

  }

  ngOnInit() {

    let colors = ["bg-success", "bg-danger", "bg-secondary"];
    for (let i = 0; i < 56; i++) {
      this.statusStaffing.push(colors[Math.floor(colors.length * Math.random())]+" px-0 py-2");
    }
    console.log('this.status', this.statusStaffing);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-row-staffing]',
  templateUrl: './row-staffing.component.html',
  styleUrls: ['./row-staffing.component.scss']
})
export class RowStaffingComponent implements OnInit {

  dureeStaffing = [];

  draggedTd : any = null;
  constructor() { }

  ngOnInit() {

    let d = ["1d", "1/2d",""];
    for (let i = 0; i < 56; i++) {
      this.dureeStaffing.push(d[Math.floor(d.length * Math.random())]);
    }
  }

  onDragstart(e){
    console.log();
    this.draggedTd = e.target;
    console.log(e.target);
  }

  onDragover(e) {
    console.log(e.target);
    if(e.target.tagName.toUpperCase() === "TD" && !e.target.querySelector("button") && this.draggedTd){
    e.preventDefault();
    e.stopPropagation();
  }
  }

  onDrop(e){
    e.preventDefault();
    e.stopPropagation();
    e.target.append(this.draggedTd.querySelector("button"));
    this.draggedTd = null;
  }

}

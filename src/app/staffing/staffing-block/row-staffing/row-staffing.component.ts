import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-row-staffing]',
  templateUrl: './row-staffing.component.html',
  styleUrls: ['./row-staffing.component.scss']
})
export class RowStaffingComponent implements OnInit {

  @Input() dureeStaffing = [];

  draggedTd : any = null;
  constructor() { }

  ngOnInit() {

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

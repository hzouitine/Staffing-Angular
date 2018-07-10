import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '../../../../../node_modules/@angular/material';
import { CreateStaffingComponent } from '../create-staffing/create-staffing.component';

@Component({
  selector: '[app-row-staffing]',
  templateUrl: './row-staffing.component.html',
  styleUrls: ['./row-staffing.component.scss']
})
export class RowStaffingComponent implements OnInit {

  @Input() dureeStaffing = [];
  @Input() project: string;
  dragov = false;
  draggedTd: any = null;
  constructor() { }

  ngOnInit() {

  }

  onDragstart(e) {
    this.draggedTd = e.target;
    console.log(e.target);
  }

  onDragover(e) {
    console.log(e.target);
    if (e.target.tagName.toUpperCase() === "TD" && !e.target.querySelector("button") && this.draggedTd) {
      e.target.classList.add('bg-info');
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.target.classList.add('bg-danger');
    }
  }
  onDragleave(e) {
    e.target.classList.remove('bg-info');
    e.target.classList.remove('bg-danger');
    e.preventDefault();
    e.stopPropagation();

  }

  onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove('bg-info');
    e.target.classList.remove('bg-danger');
    e.target.append(this.draggedTd.querySelector("button"));
    this.draggedTd = null;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {
  tab = [];

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.tab.push("Resource");
    }
  }

  ngOnInit() {
  }

}

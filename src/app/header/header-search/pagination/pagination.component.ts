import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit{

  private pageSelected : number = 1;
  private numResources : number;
  private resByPageSelectedIndex : number = 2;
  private resByPage : number[] = [5,10,15,20,25,30];
  
  constructor() {
    this.numResources = 51;

  }
  ngOnInit() {
    console.log('pages() in oninit',this.pages())
  }


  numberOfPages() {
    if( this.numResources%this.resByPage[this.resByPageSelectedIndex ] == 0)
      return parseInt(this.numResources/this.resByPage[this.resByPageSelectedIndex ]+"")
    else
      return parseInt(this.numResources/this.resByPage[this.resByPageSelectedIndex ]+"") + 1;
    
  }

  pages(){
    let _pages : number[] = [];
    for(var i=1;i<=this.numberOfPages();i++){
      _pages.push(i);
    }
    return _pages;
  }

  navigate(v){
    if(this.pageSelected + v <= this.numberOfPages() && this.pageSelected + v > 0)
      this.pageSelected = this.pageSelected + v;
  }
  onselectionChange(){
    console.log("Send Request");

  }

}

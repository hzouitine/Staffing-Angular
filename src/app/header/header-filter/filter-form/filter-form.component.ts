import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
 class Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})

export class FilterFormComponent implements OnInit {

  filterForm: FormGroup;
  foods: Food[] = [
    { value: 'steak', viewValue: 'Steak' },
    { value: 'pizza', viewValue: 'Pizza' },
    { value: 'tacos-1', viewValue: 'Tacos1' },
    { value: 'tacos-2', viewValue: 'Tacos2' },
    { value: 'tacos-3', viewValue: 'Tacos3' },
    { value: 'tacos-4', viewValue: 'Tacos4' },
    { value: 'tacos-5', viewValue: 'Tacos5' },
    { value: 'tacos-6', viewValue: 'Tacos6' },
    { value: 'tacos-7', viewValue: 'Tacos7' },
    { value: 'tacos-8', viewValue: 'Tacos8' },
    { value: 'tacos-9', viewValue: 'Tacos9' }
  ];

  filtredResource: Observable<Food[]>;
  filtredProject: Observable<Food[]>;
  filtredLocation: Observable<Food[]>;
  filtredUnitedOrganizational: Observable<Food[]>;
  filtredTl: Observable<Food[]>;
  constructor() {
    this.filterForm = new FormGroup({
      food1: new FormControl(),
      food2: new FormControl(),
      food3: new FormControl(),
      food4: new FormControl(),
      food5: new FormControl(),
      food6: new FormControl()

    });
    this.filtredResource = this.filterForm.get('food1').valueChanges
      .pipe(
        startWith(''),
        map(food => food ? this._filterFoods(food) : this.foods.slice())
      );

    this.filtredProject = this.filterForm.get('food2').valueChanges
      .pipe(
        startWith(''),
        map(food => food ? this._filterFoods(food) : this.foods.slice())
      );
    this.filtredLocation = this.filterForm.get('food3').valueChanges
      .pipe(
        startWith(''),
        map(food => food ? this._filterFoods(food) : this.foods.slice())
      );
    this.filtredUnitedOrganizational = this.filterForm.get('food4').valueChanges
      .pipe(
        startWith(''),
        map(food => food ? this._filterFoods(food) : this.foods.slice())
      );
    this.filtredTl = this.filterForm.get('food5').valueChanges
      .pipe(
        startWith(''),
        map(food => food ? this._filterFoods(food) : this.foods.slice())
      );
  }
  private _filterFoods(value: string): Food[] {
    const filterValue = value.toLowerCase();

    return this.foods.filter(food => food.value.toLowerCase().includes(filterValue));
  }

  ngOnInit() {

  }

  reset(){
    this.filterForm.reset()

  }

}

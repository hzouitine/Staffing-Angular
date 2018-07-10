import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingReduceComponent } from './staffing-reduce.component';

describe('StaffingReduceComponent', () => {
  let component: StaffingReduceComponent;
  let fixture: ComponentFixture<StaffingReduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffingReduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffingReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

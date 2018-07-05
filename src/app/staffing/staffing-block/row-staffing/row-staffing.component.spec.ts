import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowStaffingComponent } from './row-staffing.component';

describe('RowStaffingComponent', () => {
  let component: RowStaffingComponent;
  let fixture: ComponentFixture<RowStaffingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowStaffingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

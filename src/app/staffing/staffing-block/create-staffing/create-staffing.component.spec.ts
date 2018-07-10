import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStaffingComponent } from './create-staffing.component';

describe('CreateStaffingComponent', () => {
  let component: CreateStaffingComponent;
  let fixture: ComponentFixture<CreateStaffingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStaffingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

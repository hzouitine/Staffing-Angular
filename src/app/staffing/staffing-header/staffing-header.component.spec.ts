import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingHeaderComponent } from './staffing-header.component';

describe('StaffingHeaderComponent', () => {
  let component: StaffingHeaderComponent;
  let fixture: ComponentFixture<StaffingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

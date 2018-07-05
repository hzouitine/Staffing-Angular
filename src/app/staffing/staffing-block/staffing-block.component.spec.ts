import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingBlockComponent } from './staffing-block.component';

describe('StaffingBlockComponent', () => {
  let component: StaffingBlockComponent;
  let fixture: ComponentFixture<StaffingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

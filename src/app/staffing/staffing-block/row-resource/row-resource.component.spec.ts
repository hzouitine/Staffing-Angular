import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowResourceComponent } from './row-resource.component';

describe('RowResourceComponent', () => {
  let component: RowResourceComponent;
  let fixture: ComponentFixture<RowResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

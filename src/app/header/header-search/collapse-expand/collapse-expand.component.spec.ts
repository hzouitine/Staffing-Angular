import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseExpandComponent } from './collapse-expand.component';

describe('CollapseExpandComponent', () => {
  let component: CollapseExpandComponent;
  let fixture: ComponentFixture<CollapseExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

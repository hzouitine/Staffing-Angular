import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesPagesComponent } from './resources-pages.component';

describe('ResourcesPagesComponent', () => {
  let component: ResourcesPagesComponent;
  let fixture: ComponentFixture<ResourcesPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

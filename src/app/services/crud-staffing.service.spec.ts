import { TestBed, inject } from '@angular/core/testing';

import { CrudStaffingService } from './crud-staffing.service';

describe('CrudStaffingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudStaffingService]
    });
  });

  it('should be created', inject([CrudStaffingService], (service: CrudStaffingService) => {
    expect(service).toBeTruthy();
  }));
});

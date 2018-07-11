import { TestBed, inject } from '@angular/core/testing';

import { StaffingDateHeaderServiceService } from './staffing-date-header-service.service';

describe('StaffingDateHeaderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaffingDateHeaderServiceService]
    });
  });

  it('should be created', inject([StaffingDateHeaderServiceService], (service: StaffingDateHeaderServiceService) => {
    expect(service).toBeTruthy();
  }));
});

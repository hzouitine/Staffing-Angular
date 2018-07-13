import { TestBed, inject } from '@angular/core/testing';

import { ExpandServiceService } from './expand-service.service';

describe('ExpandServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpandServiceService]
    });
  });

  it('should be created', inject([ExpandServiceService], (service: ExpandServiceService) => {
    expect(service).toBeTruthy();
  }));
});

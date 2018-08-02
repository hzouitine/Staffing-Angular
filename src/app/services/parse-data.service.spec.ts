import { TestBed, inject } from '@angular/core/testing';

import { ParseDataService } from './parse-data.service';

describe('ParseDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParseDataService]
    });
  });

  it('should be created', inject([ParseDataService], (service: ParseDataService) => {
    expect(service).toBeTruthy();
  }));
});

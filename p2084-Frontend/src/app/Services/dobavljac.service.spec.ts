import { TestBed } from '@angular/core/testing';

import { DobavljacService } from './dobavljac.service';

describe('DobavljacService', () => {
  let service: DobavljacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DobavljacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

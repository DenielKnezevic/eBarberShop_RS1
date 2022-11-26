import { TestBed } from '@angular/core/testing';

import { TerminiService } from './termini.service';

describe('TerminiService', () => {
  let service: TerminiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

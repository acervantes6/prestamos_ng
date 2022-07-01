import { TestBed } from '@angular/core/testing';

import { LoanService } from './loan.service';

describe('LoanService', () => {
  let service: LoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should receive an array by default', async () => {
    const loansList = await service.getLoans();
    expect( typeof loansList ).toBe('Array');
  })
});

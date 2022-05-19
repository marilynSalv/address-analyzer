import { TestBed } from '@angular/core/testing';

import { AddressDetailsService } from './address-details.service';

describe('AddressDetailsService', () => {
  let service: AddressDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

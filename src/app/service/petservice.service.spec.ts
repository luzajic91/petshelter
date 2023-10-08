import { TestBed } from '@angular/core/testing';

import { PetserviceService } from './petservice.service';

describe('PetserviceService', () => {
  let service: PetserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

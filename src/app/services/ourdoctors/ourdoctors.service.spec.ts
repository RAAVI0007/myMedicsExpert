import { TestBed } from '@angular/core/testing';

import { OurdoctorsService } from './ourdoctors.service';

describe('OurdoctorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OurdoctorsService = TestBed.get(OurdoctorsService);
    expect(service).toBeTruthy();
  });
});

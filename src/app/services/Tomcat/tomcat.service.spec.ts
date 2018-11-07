import { TestBed } from '@angular/core/testing';

import { TomcatService } from './tomcat.service';

describe('TomcatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TomcatService = TestBed.get(TomcatService);
    expect(service).toBeTruthy();
  });
});

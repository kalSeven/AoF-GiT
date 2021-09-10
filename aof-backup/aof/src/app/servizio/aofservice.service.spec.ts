import { TestBed } from '@angular/core/testing';

import { AofserviceService } from './aofservice.service';

describe('AofserviceService', () => {
  let service: AofserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AofserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WayfairService } from './wayfair.service';

describe('WayfairService', () => {
  let service: WayfairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WayfairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WifimanageService } from './wifimanage.service';

describe('WifimanageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WifimanageService = TestBed.get(WifimanageService);
    expect(service).toBeTruthy();
  });
});

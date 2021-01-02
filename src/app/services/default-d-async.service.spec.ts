import { TestBed } from '@angular/core/testing';

import { DefaultDAsyncService } from './default-d-async.service';

describe('DefaultDAsyncService', () => {
  let service: DefaultDAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultDAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DefaultAService } from './default-a.service';

describe('DefaultAService', () => {
  let defaultAService: DefaultAService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DefaultAService] });
    defaultAService = TestBed.inject(DefaultAService);
  });

  it('should be created', () => {
    expect(defaultAService).toBeTruthy();
  });

  it('#test should return string value', () => {
    expect(defaultAService.getValue()).toBe('Hello, World!');
  });

  it('#getObservableValue should return value from observable', (done: DoneFn) => {
    defaultAService.getObservableValue().subscribe(value => {
      expect(value).toBe('Hello, World!');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
    defaultAService.getPromiseValue().then(value => {
      expect(value).toBe('Hello, World!');
      done();
    });
  });
});

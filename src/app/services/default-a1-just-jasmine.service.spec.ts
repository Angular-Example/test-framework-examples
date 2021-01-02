import { TestBed } from '@angular/core/testing';

import { DefaultAService } from './default-a.service';

// Straight Jasmine testing without Angular's testing support
describe('DefaultAService', () => {
  let defaultAService: DefaultAService;

  beforeEach(() => {
    defaultAService = new DefaultAService();
  });

  // COMPARE WITH:
  // - default-a2-test-bed.service.spec.ts
  // - default-a3-test-bed.service.spec.ts




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

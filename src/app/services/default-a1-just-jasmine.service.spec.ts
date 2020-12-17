import { TestBed } from '@angular/core/testing';

import { DefaultAService } from './default-a.service';

// Straight Jasmine testing without Angular's testing support
describe('DefaultAService', () => {
  let service: DefaultAService;
  beforeEach(() => { service = new DefaultAService(); });

  it('#test should return string value', () => {
    expect(service.getValue()).toBe('Hello, World!');
  });

  it('#getObservableValue should return value from observable', (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('Hello, World!');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('Hello, World!');
      done();
    });
  });
});

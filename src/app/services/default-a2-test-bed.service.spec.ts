import { TestBed } from '@angular/core/testing';

import { DefaultAService } from './default-a.service';

// with Angular TestBed Support
describe('DefaultAService', () => {
  let defaultAService: DefaultAService;

  beforeEach(() => {
    // - TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule
    // - TestBed.configureTestingModule() method takes a metadata object that can have most of the
    //   properties of an @NgModule
    TestBed.configureTestingModule({});
    // - TestBed.inject - injects the mock into test environment
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

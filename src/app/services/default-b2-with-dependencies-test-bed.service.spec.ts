import { TestBed } from '@angular/core/testing';

import { DefaultAService } from './default-a.service';
import { DefaultBService } from './default-b.service';

describe('DefaultBService without Angular testing support', () => {
  let defaultBService: DefaultBService;
  let defaultAServiceSpy: jasmine.SpyObj<DefaultAService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('DefaultAService', ['getValue']);

    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [
        DefaultBService,
        { provide: DefaultAService, useValue: spy }
      ]
    });
    // Inject both the service-to-test and its (spy) dependency
    defaultBService = TestBed.inject(DefaultBService);
    defaultAServiceSpy = TestBed.inject(DefaultAService) as jasmine.SpyObj<DefaultAService>;
  });

  it('#getValue should return stubbed value from a spy', () => {
    const stubValue = 'stub value';
    defaultAServiceSpy.getValue.and.returnValue(stubValue);

    expect(defaultBService.getValue()).toBe(stubValue, 'service returned stub value');
    expect(defaultAServiceSpy.getValue.calls.count()).toBe(1, 'spy method was called once');
    expect(defaultAServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  });
});

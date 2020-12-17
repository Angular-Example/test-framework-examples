import { TestBed } from '@angular/core/testing';

import { DefaultAService } from './default-a.service';
import { DefaultAFakeService } from './default-a-fake.service';
import { DefaultBService } from './default-b.service';

describe('DefaultBService without Angular testing support', () => {
  let defaultBService: DefaultBService;

  it('#getValue should return real value from the real service', () => {
    let defaultBService = new DefaultBService(new DefaultAService());
    expect(defaultBService.getValue()).toBe('Hello, World!');
  });

  it('#getValue should return faked value from a fakeService', () => {
    defaultBService = new DefaultBService(new DefaultAFakeService());
    expect(defaultBService.getValue()).toBe('Hello, World!');
  });

  it('#getValue should return faked value from a fake object', () => {
    const fake =  { getValue: () => 'fake value' };
    defaultBService = new DefaultBService(fake as DefaultAService);
    expect(defaultBService.getValue()).toBe('fake value');
  });

  it('#getValue should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the DefaultAService
    const defaultAServiceSpy = jasmine.createSpyObj('DefaultAService', ['getValue']);

    // set the value to return when the `getValue` spy is called.
    const stubValue = 'stub value';
    defaultAServiceSpy.getValue.and.returnValue(stubValue);

    defaultBService = new DefaultBService(defaultAServiceSpy);

    expect(defaultBService.getValue()).toBe(stubValue, 'service returned stub value');
    expect(defaultAServiceSpy.getValue.calls.count()).toBe(1, 'spy method was called once');
    expect(defaultAServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  });
});

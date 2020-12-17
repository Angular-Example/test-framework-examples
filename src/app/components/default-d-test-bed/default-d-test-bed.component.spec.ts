import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDTestBedComponent } from './default-d-test-bed.component';

describe('DefaultDTestBedComponent', () => {
  let comp: DefaultDTestBedComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        DefaultDTestBedComponent
      ]
    })
    comp = TestBed.inject(DefaultDTestBedComponent);
  });

  it('should not have value after construction', () => {
    expect(comp.value).toBeUndefined();
  });

  it('should have value after Angular calls ngOnInit', () => {
    comp.ngOnInit();
    expect(comp.value).toContain('Hello, World!');
  });
});

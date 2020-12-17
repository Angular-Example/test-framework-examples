import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCInputOutputComponent } from './default-c-input-output.component';

describe('DefaultCInputOutputComponent', () => {
  it('raises the selected event when clicked', () => {
    const comp = new DefaultCInputOutputComponent();
    const expectedValue: string = 'Hello, World!';
    comp.value = expectedValue;

    comp.selected.subscribe((actualValue: string) => {
      expect(actualValue).toBe(expectedValue);
    });

    comp.click();
  });
});

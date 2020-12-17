import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultBComponent } from './default-b.component';

describe('DefaultBComponent', () => {

  it('#clicked() should toggle #isOn', () => {
    const comp = new DefaultBComponent();
    expect(comp.isOn).toBe(false, 'off at first');
    comp.clicked();
    expect(comp.isOn).toBe(true, 'on after click');
    comp.clicked();
    expect(comp.isOn).toBe(false, 'off after second click');
  });

  it('#clicked() should set #message to "is on"', () => {
    const comp = new DefaultBComponent();
    expect(comp.message).toMatch(/is off/i, 'off at first');
    comp.clicked();
    expect(comp.message).toMatch(/is on/i, 'on after clicked');
  });
});

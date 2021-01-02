import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import { DebugElement } from '@angular/core';
import { DefaultCInputOutputSmallerComponent } from './default-c-input-output-smaller.component';

describe('DefaultCInputOutputSmallerComponent', () => {
  let component: DefaultCInputOutputSmallerComponent;
  let spanDe: any;
  let spanEl: any;
  let expectedValue: string;

  beforeEach(async () => {
      TestBed.configureTestingModule({declarations: [DefaultCInputOutputSmallerComponent]})
      const fixture = TestBed.createComponent(DefaultCInputOutputSmallerComponent);
      component = fixture.componentInstance;

      // find the span DebugElement and element
      spanDe = fixture.debugElement.query(By.css('span'));
      spanEl = spanDe.nativeElement;

      // mock the string supplied by the parent component
      expectedValue = 'MOCKED STRING';

      // simulate the parent setting the input property with that hero
      component.value = expectedValue;

      // trigger initial data binding
      fixture.detectChanges();
  });

  it('should display string value', () => {
    expect(spanEl.textContent).toContain(expectedValue);
  });

  it('should raise selected event when clicked (triggerEventHandler)', () => {
    let selectedValue: string;
    component.selected.subscribe((value: string) => selectedValue = value);

    // simulates user clicking on span, which then calls component.click()
    // which then calls selected: EventEmitter
    // which was subscribed above to capture emitted string value
    spanDe.triggerEventHandler('click', null);
    // now we compare
    expect(selectedValue).toBe(expectedValue);
  });

  it('should raise selected event when clicked (element.click)', () => {
    let selectedValue: string;
    component.selected.subscribe((value: string) => selectedValue = value);

    // simulates user clicking on span, which then calls component.click()
    // which then calls selected: EventEmitter
    // which was subscribed above to capture emitted string value
    spanEl.click();
    // now we compare
    expect(selectedValue).toBe(expectedValue);
  });

  it('should raise selected event when clicked (click helper)', () => {
    let selectedValue: string;
    component.selected.subscribe((value: string) => selectedValue = value);

    click(spanDe);  // click helper with DebugElement
    click(spanEl);  // click helper with native element

    expect(selectedValue).toBe(expectedValue);
  });
});

/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
export const ButtonClickEvents = {
   left:  { button: 0 },
   right: { button: 2 }
};

/** Simulate element click. Defaults to mouse left-button click event. */
export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}

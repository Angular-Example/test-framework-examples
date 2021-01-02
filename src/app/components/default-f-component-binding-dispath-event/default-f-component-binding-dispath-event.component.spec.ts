import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { DefaultFComponentBindingDispathEventComponent } from './default-f-component-binding-dispath-event.component';

let fixture: ComponentFixture<DefaultFComponentBindingDispathEventComponent>;
let component: DefaultFComponentBindingDispathEventComponent;

// describe('DefaultFComponentBindingDispathEventComponent', () => {
//   beforeEach(waitForAsync(() => {
//     fixture = TestBed.createComponent(DefaultFComponentBindingDispathEventComponent);
//     component = fixture.componentInstance;
//     // 1st change detection triggers ngOnInit which gets a hero
//     fixture.detectChanges();
//     return fixture.whenStable().then(() => {
//       // 2nd change detection displays the async-fetched hero
//       fixture.detectChanges();
//     });
//   }));
//
//   it('should keep input and h2 in sync', () => {
//       // get the name's input and display elements from the DOM
//       const hostElement = fixture.nativeElement;
//       const nameInput: HTMLInputElement = hostElement.querySelector('input');
//       const nameDisplay: HTMLElement = hostElement.querySelector('span');
//
//       // simulate user entering a new name into the input box
//       nameInput.value = 'quick BROWN  fOx';
//
//       // Dispatch a DOM event so that Angular learns of input value change.
//       // In older browsers, such as IE, you might need a CustomEvent instead. See
//       // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
//       nameInput.dispatchEvent(new Event('input'));
//
//       // Tell Angular to update the display binding through the title pipe
//       fixture.detectChanges();
//
//       expect(nameDisplay.textContent).toBe('Quick Brown  Fox');
//   });
// });

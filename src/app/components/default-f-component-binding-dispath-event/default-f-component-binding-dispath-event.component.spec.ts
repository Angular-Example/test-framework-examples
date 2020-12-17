import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { DefaultFComponentBindingDispathEventComponent } from './default-f-component-binding-dispath-event.component';

describe('DefaultFComponentBindingDispathEventComponent', () => {

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ DefaultFComponentBindingDispathEventComponent ],
      imports: [FormsModule]
    }).compileComponents();
  });

  it('should keep input and h2 in sync', () => {
    const fixture = TestBed.createComponent(DefaultFComponentBindingDispathEventComponent);
    fixture.detectChanges();
    const inputDe = fixture.debugElement.query(By.css('input'));
    const inputEl = inputDe.nativeElement;
    inputEl.value = 'Updated Task 1';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('span'));
    expect(de.nativeElement.textContent).toEqual('Updated Task 1');
  });
});

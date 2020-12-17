import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { DefaultFComponentBindingAutomaticChangeDetectionComponent } from './default-f-component-binding-automatic-change-detection.component';

describe('DefaultFComponentBindingAutomaticChangeDetectionComponent', () => {
  let component: DefaultFComponentBindingAutomaticChangeDetectionComponent;
  let fixture: ComponentFixture<DefaultFComponentBindingAutomaticChangeDetectionComponent>;
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultFComponentBindingAutomaticChangeDetectionComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    fixture = TestBed.createComponent(DefaultFComponentBindingAutomaticChangeDetectionComponent);
    component = fixture.componentInstance; // DefaultFComponentBindingAutomaticChangeDetectionComponent test instance
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should display original title', () => {
    // Hooray! No `fixture.detectChanges()` needed
    expect(h1.textContent).toContain(component.title);
  });

  it('should still see original title after comp.title change', () => {
    const oldTitle = component.title;
    component.title = 'Test Title';
    // Displayed title is old because Angular didn't hear the change :(
    expect(h1.textContent).toContain(oldTitle);
  });

  it('should display updated title after detectChanges', () => {
    component.title = 'Test Title';
    fixture.detectChanges(); // detect changes explicitly
    expect(h1.textContent).toContain(component.title);
  });
});

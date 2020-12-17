import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFComponentBindingComponent } from './default-f-component-binding.component';

describe('DefaultFComponentBindingComponent', () => {
  let component: DefaultFComponentBindingComponent;
  let fixture: ComponentFixture<DefaultFComponentBindingComponent>;
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultFComponentBindingComponent ],
    });
    fixture = TestBed.createComponent(DefaultFComponentBindingComponent);
    component = fixture.componentInstance; // DefaultFComponentBindingComponent test instance
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('no title in the DOM after createComponent()', () => {
    expect(h1.textContent).toEqual('');
  });

  it('should display original title after detectChanges()', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

  it('should display a different test title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(h1.textContent).toContain('Test Title');
  });
});

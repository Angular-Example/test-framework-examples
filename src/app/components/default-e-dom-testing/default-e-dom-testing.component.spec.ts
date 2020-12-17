import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from "@angular/core";

import { DefaultEDomTestingComponent } from './default-e-dom-testing.component';

describe('DefaultEDomTestingComponent 1', () => {
    // THE COMMENTED OUT CODE IS REPLACED BY THE BELOW CODE
//   let component: DefaultEDomTestingComponent;
//   let fixture: ComponentFixture<DefaultEDomTestingComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DefaultEDomTestingComponent ]
//     })
//     .compileComponents();
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(DefaultEDomTestingComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeDefined();
//   });

  // THE CODE BELOW REPLACES THE ABOVE COMMENTED OUT CODE
  it('should create', () => {
    TestBed.configureTestingModule({declarations: [DefaultEDomTestingComponent]});
    const fixture = TestBed.createComponent(DefaultEDomTestingComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
  // TestBed.createComponent() creates an instance of the BannerComponent,
  // adds a corresponding element to the test-runner DOM, and returns a ComponentFixture.
});

describe('DefaultEDomTestingComponent 2', () => {
  let component: DefaultEDomTestingComponent;
  let fixture: ComponentFixture<DefaultEDomTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultEDomTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultEDomTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should contain "default-e-dom-testing works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('default-e-dom-testing works!');
  });

  it('should have <p> with "default-e-dom-testing works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('p');
    expect(p.textContent).toEqual('default-e-dom-testing works!');
  });

  it('should find the <p> with fixture.debugElement.nativeElement)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const p = bannerEl.querySelector('p');
    expect(p.textContent).toEqual('default-e-dom-testing works!');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultAService } from '../../services/default-a.service'
import { DefaultGWithDependencyAPartialComponent } from './default-g-with-dependency-a-partial.component';

describe('Real Service', () => {
  let component: DefaultGWithDependencyAPartialComponent;
  let fixture: ComponentFixture<DefaultGWithDependencyAPartialComponent>;
  let defaultAService: DefaultAService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultGWithDependencyAPartialComponent ],
      providers: [ DefaultAService ]
    }).compileComponents();
    fixture = TestBed.createComponent(DefaultGWithDependencyAPartialComponent);
    component = fixture.componentInstance;
    // retrieve autogenerated DefaultAService
    defaultAService = fixture.debugElement.injector.get(DefaultAService);
    // TestBed.inject only works when Angular injects the component with the
    // service instance in the test's root injector
    defaultAService = TestBed.inject(DefaultAService);
    fixture.detectChanges();
  });

  it('', () => {
    component.ngOnInit();
    expect(component.value).toContain('Hello, World!');
  });
});

describe('Stubbing Dependency', () => {
  let component: DefaultGWithDependencyAPartialComponent;
  let fixture: ComponentFixture<DefaultGWithDependencyAPartialComponent>;
  let defaultAServiceStub: Partial<DefaultAService>;

  beforeEach(async () => {
    defaultAServiceStub = {
      value: 'Hello, World! Stub'
    };
    await TestBed.configureTestingModule({
      declarations: [ DefaultGWithDependencyAPartialComponent ],
      providers: [ { provide: DefaultAService, useValue: defaultAServiceStub } ],
    }).compileComponents();
    fixture = TestBed.createComponent(DefaultGWithDependencyAPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('', () => {
    component.ngOnInit();
    expect(component.value).toContain('Hello, World! Stub');
  });
});

describe('Spy Dependency', () => {
  it('', async () => {
    // Create a fake DefaultAService object with a `getQuote()` spy
    const defaultAServiceSpy = jasmine.createSpyObj('DefaultAService', ['getValue']);
    // Make the spy return a synchronous Observable with the test data
    const getValueSpy = defaultAServiceSpy.getValue.and.returnValue('Hello, World! SPY');

    await TestBed.configureTestingModule({
      declarations: [ DefaultGWithDependencyAPartialComponent ],
      providers: [ { provide: DefaultAService, useValue: defaultAServiceSpy } ],
    }).compileComponents();

    let component = TestBed.createComponent(DefaultGWithDependencyAPartialComponent).componentInstance;
    component.getValue();
    expect(component.value).toContain('Hello, World! SPY');
  });
});

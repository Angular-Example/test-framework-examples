import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { DefaultDAsyncService } from '../../services/default-d-async.service'
import { DefaultGWithDependencyBAsyncComponent } from './default-g-with-dependency-b-async.component';
import { throwError, Observable, of, from } from 'rxjs';

describe('Spy Dependency - return success', () => {
  it('', async () => {
    // Create a fake DefaultAService object with a `getQuote()` spy
    const defaultDAsyncServiceSpy = jasmine.createSpyObj('DefaultDAsyncService', ['getValueAsync']);
    // Make the spy return a synchronous Observable with the test data
    const getValueSpy = defaultDAsyncServiceSpy.getValueAsync.and.returnValue(of('Hello, World! SPY ASYNC'));

    await TestBed.configureTestingModule({
      declarations: [ DefaultGWithDependencyBAsyncComponent ],
      providers: [ { provide: DefaultDAsyncService, useValue: defaultDAsyncServiceSpy } ],
    }).compileComponents();

    let component = TestBed.createComponent(DefaultGWithDependencyBAsyncComponent).componentInstance;
    await component.ngOnInit();

    expect(component.value).toContain('Hello, World! SPY ASYNC');
  });

  it('Spy Dependency - throw error', fakeAsync(() => {
    // Create a fake DefaultAService object with a `getQuote()` spy
    const defaultDAsyncServiceSpy = jasmine.createSpyObj('DefaultDAsyncService', ['getValueAsync']);
    // tell spy to return an error observable
    const getValueSpy = defaultDAsyncServiceSpy.getValueAsync.and.returnValue(throwError(new Error('oops!')));

    TestBed.configureTestingModule({
      declarations: [ DefaultGWithDependencyBAsyncComponent ],
      providers: [ { provide: DefaultDAsyncService, useValue: defaultDAsyncServiceSpy } ],
    }).compileComponents();

    let component = TestBed.createComponent(DefaultGWithDependencyBAsyncComponent).componentInstance;
    component.ngOnInit();

    expect(component.error.message).toMatch(/oops/, 'should display error');
  }));
});


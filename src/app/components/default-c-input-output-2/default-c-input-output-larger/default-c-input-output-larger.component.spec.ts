import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCInputOutputLargerComponent } from './default-c-input-output-larger.component';

describe('DefaultCInputOutputLargerComponent', () => {
  let component: DefaultCInputOutputLargerComponent;
  let fixture: ComponentFixture<DefaultCInputOutputLargerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultCInputOutputLargerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCInputOutputLargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

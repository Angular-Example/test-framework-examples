import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComponent } from './component.component';
import { HostComponent } from '../host/host.component';

describe('ComponentComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let guestElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentComponent, HostComponent ]
    });
    // - Creating the HostComponent has the side-effect of creating a ComponentComponent
    //   because the latter appears within the template of the former
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    // the .guest element is inside the "Guest" ComponentComponent
    guestElement = fixture.nativeElement.querySelector('.guest');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(guestElement.innerHTML).toBe('Hello, World!');
  });
});

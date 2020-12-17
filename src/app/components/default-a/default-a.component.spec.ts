import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAComponent } from './default-a.component';
import { DefaultAService } from '../../services/default-a.service'
import { DefaultBService } from '../../services/default-b.service'
import { DefaultCHttpService } from '../../services/default-c-http.service'

describe('DefaultAComponent', () => {
  let component: DefaultAComponent;
  let fixture: ComponentFixture<DefaultAComponent>;

  beforeEach(async () => {
    const spyA = jasmine.createSpyObj('DefaultAService', ['getValue']);
    const spyB = jasmine.createSpyObj('DefaultBService', ['getValue']);
    const spyC = jasmine.createSpyObj('DefaultCHttpService', ['getValue']);

    await TestBed.configureTestingModule({
      declarations: [ DefaultAComponent ],
      providers: [
        { provide: DefaultAService, useValue: spyA },
        { provide: DefaultBService, useValue: spyB },
        { provide: DefaultCHttpService, useValue: spyB },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

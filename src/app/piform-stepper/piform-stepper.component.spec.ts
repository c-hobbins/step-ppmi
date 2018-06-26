import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiformStepperComponent } from './piform-stepper.component';

describe('PiformStepperComponent', () => {
  let component: PiformStepperComponent;
  let fixture: ComponentFixture<PiformStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiformStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiformStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

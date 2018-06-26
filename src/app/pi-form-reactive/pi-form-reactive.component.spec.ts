import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiFormReactiveComponent } from './pi-form-reactive.component';

describe('PiFormReactiveComponent', () => {
  let component: PiFormReactiveComponent;
  let fixture: ComponentFixture<PiFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

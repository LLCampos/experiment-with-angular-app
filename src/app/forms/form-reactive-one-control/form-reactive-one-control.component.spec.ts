import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveOneControlComponent } from './form-reactive-one-control.component';

describe('FormsReactiveComponent', () => {
  let component: FormReactiveOneControlComponent;
  let fixture: ComponentFixture<FormReactiveOneControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveOneControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveOneControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

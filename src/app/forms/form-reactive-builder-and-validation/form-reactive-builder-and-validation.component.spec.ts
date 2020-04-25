import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveBuilderAndValidationComponent } from './form-reactive-builder-and-validation.component';

describe('FormReactiveBuilderComponent', () => {
  let component: FormReactiveBuilderAndValidationComponent;
  let fixture: ComponentFixture<FormReactiveBuilderAndValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveBuilderAndValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveBuilderAndValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

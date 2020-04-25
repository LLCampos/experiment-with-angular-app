import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveMultipleControlsGroupComponent } from './form-reactive-multiple-controls-group.component';

describe('FormReactiveMultipleControlsGroupComponent', () => {
  let component: FormReactiveMultipleControlsGroupComponent;
  let fixture: ComponentFixture<FormReactiveMultipleControlsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveMultipleControlsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveMultipleControlsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

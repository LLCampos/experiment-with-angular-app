import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveNestedGroupsComponent } from './form-reactive-nested-groups.component';

describe('FormReactiveNestedGroupsComponent', () => {
  let component: FormReactiveNestedGroupsComponent;
  let fixture: ComponentFixture<FormReactiveNestedGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveNestedGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveNestedGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

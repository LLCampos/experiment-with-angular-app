import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveDynamicComponent } from './form-reactive-dynamic.component';

describe('FormReactiveDynamicComponent', () => {
  let component: FormReactiveDynamicComponent;
  let fixture: ComponentFixture<FormReactiveDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

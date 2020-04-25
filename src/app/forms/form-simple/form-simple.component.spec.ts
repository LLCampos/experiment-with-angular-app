import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSimpleComponent } from './form-simple.component';

describe('Forms1Component', () => {
  let component: FormSimpleComponent;
  let fixture: ComponentFixture<FormSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

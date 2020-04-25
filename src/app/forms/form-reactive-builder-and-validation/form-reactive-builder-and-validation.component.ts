import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-reactive-builder-and-validation',
  templateUrl: './form-reactive-builder-and-validation.component.html',
  styleUrls: ['./form-reactive-builder-and-validation.component.css']
})
export class FormReactiveBuilderAndValidationComponent implements OnInit {
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  })


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: 'bla bla'
      }
    })
  }

}

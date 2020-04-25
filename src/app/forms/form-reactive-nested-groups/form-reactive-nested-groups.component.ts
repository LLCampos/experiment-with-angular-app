import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-reactive-nested-groups',
  templateUrl: './form-reactive-nested-groups.component.html',
  styleUrls: ['./form-reactive-nested-groups.component.css']
})
export class FormReactiveNestedGroupsComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    })
  })


  constructor() { }

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

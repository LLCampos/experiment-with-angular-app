import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-reactive-multiple-controls-group',
  templateUrl: './form-reactive-multiple-controls-group.component.html',
  styleUrls: ['./form-reactive-multiple-controls-group.component.css']
})
export class FormReactiveMultipleControlsGroupComponent implements OnInit {

  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-simple',
  templateUrl: './form-simple.component.html',
  styleUrls: ['./form-simple.component.css']
})
export class FormSimpleComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {}

  onSubmit(data) {
    this.myForm.reset();
    console.warn('Submitted: ', data);
  }

}

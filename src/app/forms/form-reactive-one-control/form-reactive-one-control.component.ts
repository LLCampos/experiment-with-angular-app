import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-reactive-one-control',
  templateUrl: './form-reactive-one-control.component.html',
  styleUrls: ['./form-reactive-one-control.component.css']
})
export class FormReactiveOneControlComponent implements OnInit {

  name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  updateName() {
    this.name.setValue('Dai');
  }

}

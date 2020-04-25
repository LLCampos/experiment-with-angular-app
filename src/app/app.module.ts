import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSimpleComponent } from './forms/form-simple/form-simple.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormReactiveOneControlComponent } from './forms/form-reactive-one-control/form-reactive-one-control.component';
import { FormTemplateDrivenComponent } from './forms/form-template-driven/form-template-driven.component';
import { FormReactiveMultipleControlsGroupComponent } from './forms/form-reactive-multiple-controls-group/form-reactive-multiple-controls-group.component';
import { FormReactiveNestedGroupsComponent } from './forms/form-reactive-nested-groups/form-reactive-nested-groups.component';
import { FormReactiveBuilderAndValidationComponent } from './forms/form-reactive-builder-and-validation/form-reactive-builder-and-validation.component';
import { FormReactiveDynamicComponent } from './forms/form-reactive-dynamic/form-reactive-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSimpleComponent,
    FormReactiveOneControlComponent,
    FormTemplateDrivenComponent,
    FormReactiveMultipleControlsGroupComponent,
    FormReactiveNestedGroupsComponent,
    FormReactiveBuilderAndValidationComponent,
    FormReactiveDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

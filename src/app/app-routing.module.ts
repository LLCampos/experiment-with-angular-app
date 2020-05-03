import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormSimpleComponent} from './forms/form-simple/form-simple.component';
import {FormReactiveOneControlComponent} from './forms/form-reactive-one-control/form-reactive-one-control.component';
import {FormTemplateDrivenComponent} from './forms/form-template-driven/form-template-driven.component';
import {FormReactiveMultipleControlsGroupComponent} from './forms/form-reactive-multiple-controls-group/form-reactive-multiple-controls-group.component';
import {FormReactiveNestedGroupsComponent} from './forms/form-reactive-nested-groups/form-reactive-nested-groups.component';
import {FormReactiveBuilderAndValidationComponent} from './forms/form-reactive-builder-and-validation/form-reactive-builder-and-validation.component';
import {FormReactiveDynamicComponent} from './forms/form-reactive-dynamic/form-reactive-dynamic.component';


const routes: Routes = [
  { path: 'form-simple', component: FormSimpleComponent },
  { path: 'forms-reactive-1', component: FormReactiveOneControlComponent },
  { path: 'forms-reactive-2', component: FormReactiveMultipleControlsGroupComponent },
  { path: 'forms-reactive-3', component: FormReactiveNestedGroupsComponent },
  { path: 'forms-reactive-4', component: FormReactiveBuilderAndValidationComponent },
  { path: 'forms-reactive-5', component: FormReactiveDynamicComponent },
  { path: 'forms-template-driven', component: FormTemplateDrivenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

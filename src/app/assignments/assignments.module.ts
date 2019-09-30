import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentsRoutingModule } from './assignments-routing.module';
import { AssignmentComponent } from './assignment/assignment.component';


@NgModule({
  declarations: [AssignmentComponent],
  imports: [
    CommonModule,
    AssignmentsRoutingModule
  ],
  exports: [
    AssignmentComponent
  ] 
})
export class AssignmentsModule { }

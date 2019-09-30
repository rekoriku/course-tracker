import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { AssignmentsModule } from '../assignments/assignments.module'

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AssignmentsModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CoursesModule { }

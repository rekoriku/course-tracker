import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './assignment/assignment.component';

const routes: Routes = [
  { path: '', component: AssignmentComponent }
  //{ path: 'course/:id', component: CourseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course/course.component';


const routes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'course/:id', component: CourseComponent },
  {
    path: 'course/:id/assignments',
    loadChildren: () => import('../assignments/assignments.module').then(m => m.AssignmentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }

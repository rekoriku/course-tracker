import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './courses-list';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Course[] {
    return COURSES;
  }
}

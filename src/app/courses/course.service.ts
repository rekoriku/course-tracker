import { Injectable } from '@angular/core';
import { Course } from './course';
//import { COURSES } from './courses-list';
import { HttpService } from '../http.service'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private rest: HttpService) { }

  // getCourses(): Course[] {
  //   return COURSES;
  // }

  getCourses(): Observable<Course[]> {
   return this.rest.get('http://34.73.236.56:4000/api/courses');
  }
}

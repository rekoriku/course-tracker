import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service'


@Component({
  selector: 'app-courses-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
    .subscribe(retval => {
      this.courses = Object.values(retval)[0] //get array of objects
    });
  }



}

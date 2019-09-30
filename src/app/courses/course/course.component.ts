import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service'

@Component({
  selector: 'app-courses-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses()
    console.log(this.courseService.getCourses());
  }

}

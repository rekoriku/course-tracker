import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service'
import { HttpService } from 'src/app/http.service';


@Component({
  selector: 'app-courses-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: Course;
  info : any;

  constructor(private courseService: CourseService, private rest : HttpService) { }

  ngOnInit() {
    //this.courses = this.courseService.getCourses();
    //console.log(this.courseService.getCourses());
    this.getCourses();
    //console.log(val)
    //this.rest.get('http://34.73.236.56:4000/api/assignments').subscribe(retval => {
      //console.log(retval);
     // this.info = retval;
      //console.log(this.info)
      //console.log(this.info.Competition.Results);
   // })
    //console.log(this.courseService.getCourses());
  }

  getCourses(): void {
    this.courseService.getCourses()
    .subscribe(retval => {
      this.courses = Object.values(retval)[0]
      console.log(this.courses)
      //console.log(Object.values(retval))
    });
  }



}

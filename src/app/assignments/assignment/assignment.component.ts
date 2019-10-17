import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment';
import { AssignmentService } from '../assignment.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  assignments: Assignment[];
  constructor(private assignmentService: AssignmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = Number(params.get('id')) // get route id (courseid)
      this.assignmentService.getAssignment(id).subscribe(retval => this.assignments = retval) // find assigments by courseid
    });

    

  }

}

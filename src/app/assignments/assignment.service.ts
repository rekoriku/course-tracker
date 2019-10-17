import { Injectable } from '@angular/core';
import { Assignment } from './assignment';
import { ASSIGNMENTS } from './assignment-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  constructor() { }

  getAssignments(): Observable<Assignment[]> {
    return of(ASSIGNMENTS);
  }

  getAssignment(id): Observable<Assignment[]> {
    //const id = this.getRouteId();
    //console.log(id);
    const result = ASSIGNMENTS.filter(obj => {
      return obj.courseId === id;
    })

    return of(result);
  }
}

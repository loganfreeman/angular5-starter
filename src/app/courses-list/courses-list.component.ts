import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import * as data from '../../courses.json';
@Component({
  selector: 'courses-list',
  templateUrl: 'courses-list.component.html',
  styles: []
})
export class CoursesListComponent implements OnInit {
  coursesObservable: Observable<any[]>;
  constructor() { }
  ngOnInit() {
    this.coursesObservable = this.getCourses('/courses');
  }
  getCourses(listPath): Observable<any[]> {
    let courses: any[] = Object.keys(data['courses']).map( key => data['courses'][key]);
    return Observable.of(courses);
  }
}

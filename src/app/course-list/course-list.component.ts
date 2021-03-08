import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//course.service'
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseDetails
  constructor(private courseService :CourseService) { }

  ngOnInit() {
    this.courseService.getCourseDetails().subscribe(res=>{

      console.log("response",res)
      this.courseDetails=res['courseDetails']
    })
  }

}

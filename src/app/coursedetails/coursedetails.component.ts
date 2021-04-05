import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//course.service'
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  courseData
  constructor(private courses : CourseService) { }

  ngOnInit() {
  }

  getCourseData(){

    this.courses.getCourseDetails().subscribe(res=>{

      console.log("course data",res)
      this.courseData=res['courseDetails']
    })

  }

}

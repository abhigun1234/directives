import { Component, OnInit } from '@angular/core';
import {StudentService} from '..//student.service'
@Component({
  selector: 'app-studen-details',
  templateUrl: './studen-details.component.html',
  styleUrls: ['./studen-details.component.css']
})
export class StudenDetailsComponent implements OnInit {
  studentData
  constructor(private student :StudentService) { }

  ngOnInit() {
    this.studentData=this.student.getStudentDetails()
  }

}

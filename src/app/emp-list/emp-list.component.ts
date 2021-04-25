import { Component, OnInit } from '@angular/core';
import {StudentService} from '..//student.service'
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  studentData
  constructor(private student:StudentService) { }

  ngOnInit() {
    this.studentData=this.student.getStudentDetails()
  }

}

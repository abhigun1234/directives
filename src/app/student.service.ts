import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentData=[{name:"abhishek",grad:"1"},
  {name:"ramesh",grad:"2"},{name:"raj",grad:"3"}]
  constructor() { }

  public getStudentDetails(){

    return this.studentData
  }
}

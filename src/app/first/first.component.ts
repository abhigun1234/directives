import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
   myText:string='helllo';

  constructor() { }

  ngOnInit() {
  }
  sendData(data1,data){

   this.myText=data
  }
}

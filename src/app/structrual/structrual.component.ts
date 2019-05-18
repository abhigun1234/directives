import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structrual',
  templateUrl: './structrual.component.html',
  styleUrls: ['./structrual.component.css']
})
export class StructrualComponent implements OnInit {
  person='abhishek'
  changeText="hi"
  value=false
  friuits=['<mango ','banana','pinaple','orange']

  urls=['html','css','js','jquery']
  constructor() { }

  ngOnInit() {
  }
  toggle()
  {
    this.changeText="bye"

  }
  changeMe()
  {
   this.changeText="bye bye"

  }

}

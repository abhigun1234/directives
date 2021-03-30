import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structrual',
  templateUrl: './structrual.component.html',
  styleUrls: ['./structrual.component.css']
})
export class StructrualComponent implements OnInit {
  person='Ravi'
  changeText="hi"
  value=false
  friuits=['<mango ','banana','pinaple','orange']
  employees=[{id:'1',name:'raj',salary:'2345'},{id:'1',name:'kamal',salary:'2345'},]

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

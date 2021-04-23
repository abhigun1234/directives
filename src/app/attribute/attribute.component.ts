import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  // styles: ['.classOne{color:yellow} .classTwo{background-color:blue}']
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  public cone=false;
  public ctwo=false;
  public cThree=false;
  
  public style='italic'
  public size='30px';
  color='red'
  personDessc=[{"name":"abhishek","address":"hinjewadi"},]
  constructor() { }

  ngOnInit() {
  }
  changeMe(){
    alert("hello")
  this.cone=true;    
  }
}

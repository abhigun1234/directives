import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styles: ['.classOne{color:yellow} .classTwo{background-color:blue}']
})
export class AttributeComponent implements OnInit {
  public cone=true;
  public ctwo=true;
  cThree=true;
  public style='italic'
  public size='30px';
  color='green'
  personDessc=[{"name":"abhishek","address":"hinjewadi"},]
  constructor() { }

  ngOnInit() {
  }

}

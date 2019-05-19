import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atttributedirdemo',
  templateUrl: './atttributedirdemo.component.html',
  styles: ['.classOne{color:green} .classTwo{background-color:black}']
})
export class AtttributedirdemoComponent implements OnInit {
  cone=true
  ctwo=true
  color="red"
  constructor() { }

  ngOnInit() {
  }

}

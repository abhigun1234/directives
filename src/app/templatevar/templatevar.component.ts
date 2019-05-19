import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatevar',
  templateUrl: './templatevar.component.html',
  styleUrls: ['./templatevar.component.css']
})
export class TemplatevarComponent implements OnInit {
  myId="testId"
  name="abhishek"
  changevalue=false
  constructor(
) {
   //alert('constructor')

   }

  ngOnInit() {
    //alert('ngOnInit')
  }
  clickMe(data)
  {
   console.log(data)

  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute  } from '@angular/router'
@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.css']
})
export class TeamdetailsComponent implements OnInit {
 name:string;
  constructor(private route:ActivatedRoute) {
    alert('constructor')
   }

  ngOnInit() {
    alert('ngOnInit')
    let name=(this.route.snapshot.paramMap.get('id'))
    
      alert(name)
      this.name=name;
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamList=[{id:1,name:"RR"},
  {id:2,name:"DC"},
  {id:3,name:"K11P"},
  {id:4,name:"MI"},
  {id:5,name:"KKR"},
  {id:6,name:"CSK"},
  {id:7,name:"RCB"},
  {id:8,name:"SRH"},
  
    ]
  constructor(private route:Router) { }

  ngOnInit() {
  }
  onSelect(team){
    console.log(team)
      this.route.navigate(['teams',team.id])
    // this.route.navigateByUrl('/teams')

  }

}

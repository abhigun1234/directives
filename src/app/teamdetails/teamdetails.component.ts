import { Component, OnInit } from '@angular/core';
import {ActivatedRoute  } from '@angular/router'
import {TeamService} from '..//team.service'
@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.css']
})
export class TeamdetailsComponent implements OnInit {
 name:string;
 teamList;
//  teamList=[{id:1,name:"RR","owner":"abc"},
//  {id:2,name:"DC" ,"owner":"abc"},
//  {id:3,name:"K11P" ,"owner":"abc"},
//  {id:4,name:"MI" ,"owner":"abc"},
//  {id:5,name:"KKR" ,"owner":"abc"},
//  {id:6,name:"CSK" ,"owner":"abc"},
//  {id:7,name:"RCB" ,"owner":"abc"},
//  {id:8,name:"SRH" ,"owner":"abc"},
 
//    ]
  constructor(private route:ActivatedRoute,private teamService:TeamService) {
    // alert('constructor')
   }

  ngOnInit() {
    // alert('ngOnInit')
   this.teamList=this.teamService.getTeamData()
    let name=(this.route.snapshot.paramMap.get('id'))
    
      // alert(name)
      this.name=name;
      // if(id==1){

      // }
  }

}

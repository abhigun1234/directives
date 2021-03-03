import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {TeamService} from '..//team.service'
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamList
  constructor(private route:Router,private teamService:TeamService) { }

  ngOnInit() {
  this.teamList=this.teamService.getTeamData()
  }
  onSelect(team){
    console.log(team)
      this.route.navigate(['teams',team.id])
    // this.route.navigateByUrl('/teams')

  }

}

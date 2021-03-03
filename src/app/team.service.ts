import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamList=[{id:1,name:"RR","owner":"abc"},
  {id:2,name:"DC" ,"owner":"abc"},
  {id:3,name:"K11P" ,"owner":"abc"},
  {id:4,name:"MI" ,"owner":"abc"},
  {id:5,name:"KKR" ,"owner":"abc"},
  {id:6,name:"CSK" ,"owner":"abc"},
  {id:7,name:"RCB" ,"owner":"abc"},
  {id:8,name:"SRH" ,"owner":"abc"},
  
    ]
  constructor() { }

  getTeamData(){

    return this.teamList;
  }
}

import { Component, OnInit } from '@angular/core';
import {PlayerService} from '..//player.service'
@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {

  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    var data=this.playerService.getData()
    console.log("msg",data)
  }

}

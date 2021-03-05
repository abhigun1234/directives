import { Component, OnInit } from '@angular/core';
import {PlayerService} from '..//player.service'
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
   objArray=[{"id":1}]

  constructor(private playerService:PlayerService) { }

  ngOnInit() {

    this.playerService.setData(this.objArray)
  }

}

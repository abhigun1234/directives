import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit() {
  }
  nevigateToFlight(){

   this.route.navigateByUrl('FlightDetails')
  }
}

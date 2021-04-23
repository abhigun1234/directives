import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private sports=['cripubcket','basketball','vollyball']
  // sport:any;
  iplTeams=[{"name": "kings 11","owner":"pritte"},
  {"name": "mumbai indians","owner":"ambani"},
  {"name": "rajesthan","owner":"raj"},
  {"name": "delhi","owner":"dlf"},{"name": "hydrabad","owner":"abc"}]

  cone=true
  ctwo=true
  constructor(private route:Router) { }

  ngOnInit() {
  }
  nevigateToAbout(){

   this.route.navigateByUrl('/about')
  }

}

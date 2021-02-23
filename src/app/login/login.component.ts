import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn:boolean;
  userList=[{"name":"rahul"},{"name":"rajshree"},
  {"name":"shrinivas"},{"name":"shani"},{"name":"momita"}]
  constructor() { }

  ngOnInit() {
  }
  login(name,pass){
    alert('hello')
//== === 
   if(name==='abc' && pass ==='abc')

   console.log("congratulations")
   this.loggedIn=true;
  }

}

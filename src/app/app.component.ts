import { Component } from '@angular/core';
import {Product} from '../app/product'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'dirictivesdemo';
  // productList
  // flag=false
  show=true
  public cone=true;
  public ctwo=true;
  colorvar=false;
  color='blue'
  flag=true
 private sports=['cripubcket','basketball','vollyball']
  // sport:any;
  iplTeams=[{"name": "kings 11","owner":"pritte"},
  {"name": "mumbai indians","owner":"ambani"},
  {"name": "rajesthan","owner":"raj"},
  {"name": "delhi","owner":"dlf"},{"name": "hydrabad","owner":"abc"}]
  //   let prod=new Product(name,price,description)
  //   //prod.setName(name)

  //   this.productList.push(prod)
  
  // }
  showTeams(){
 this.show=true
  }
}

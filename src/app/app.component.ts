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
  show=false
 private sports=['cripubcket','basketball','vollyball']
  // sport:any;
  iplTeams=[{"name": "kings 11","owner":"pritte"},
  {"name": "mumbai indians","owner":"ambani"},{"name": "rajesthan","owner":"raj"}]
  //   let prod=new Product(name,price,description)
  //   //prod.setName(name)

  //   this.productList.push(prod)
  
  // }
  showTeams(){
 this.show=true
  }
}

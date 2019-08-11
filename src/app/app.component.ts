import { Component } from '@angular/core';
import {Product} from '../app/product'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dirictivesdemo';
  productList
  addproduct(name:string,price:string,description)
  {
    let prod=new Product(name,price,description)
    //prod.setName(name)

    this.productList.push(prod)
  
  }
}

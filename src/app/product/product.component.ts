import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products=[{id:"1",name:'addidas',price:'2345'},{id:"1",name:'nike',price:'2345'}]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import productdata from '../..//assets/data.json';
@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.css']
})
export class MyproductComponent implements OnInit {
   productArr
  constructor() { }

  ngOnInit() {
    console.log("productdata",productdata)
    this.productArr=productdata
  }

}

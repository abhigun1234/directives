import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import productdata from '../..//assets/data.json';
import {MyproductService} from '..//myproduct.service'
@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.css']
})
export class MyproductComponent implements OnInit {
   productArr
  constructor(private route:Router,private myProduct :MyproductService) { }

  ngOnInit() {
    console.log("productdata",productdata)
    this.productArr=productdata
  }

  nevigateToProduct(product){
  this.route.navigateByUrl('/product-details')
  this.myProduct.setProduct(product)

  }

}

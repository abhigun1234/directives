import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import productdata from '../..//assets/data.json';
@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.css']
})
export class MyproductComponent implements OnInit {
   productArr
  constructor(private route:Router) { }

  ngOnInit() {
    console.log("productdata",productdata)
    this.productArr=productdata
  }

  nevigateToProduct(){
this.route.navigateByUrl('/product-details')

  }

}

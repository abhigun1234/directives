import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
import {MyproductService} from '..//myproduct.service'
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
productDeatils
  constructor(private product:MyproductService) { }

  ngOnInit() {

   this.productDeatils=this.product.getProduct()
    console.log("productdetails",this.productDeatils)

  }

}

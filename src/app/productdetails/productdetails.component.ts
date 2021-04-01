import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
productDeatils
  constructor(private product:ProductService) { }

  ngOnInit() {

    this.productDeatils=this.product.getProduct()
    console.log(" this.productDeatils", this.productDeatils)

  }

}

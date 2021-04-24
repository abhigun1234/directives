import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyproductService {
  product
  constructor() { }

  getProduct(){

   return this.product
  }
  setProduct(productObj){
    this.product=productObj
    console.log("product",this.product)
  }
}


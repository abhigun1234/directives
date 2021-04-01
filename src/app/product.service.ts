import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 productObj
  constructor() { }
  getProduct(){
   return this.productObj
  }
  setProduct(producObj){
  this.productObj=producObj;
  }
}

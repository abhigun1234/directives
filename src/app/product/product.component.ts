import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
import {Router} from '@angular/router'
import {FormGroup,FormControl,Validators} from '@angular/forms'
import productdata from '../..//assets/data.json';
import  {HttpClient} from '@angular/common/http'
 @Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //products=[{id:"1",name:'addidas',price:'2345'},{id:"1",name:'nike',price:'2345'}]
  products:any=[]
  constructor(private product :ProductService,private router:Router,private httpClient:HttpClient) { }
  flag=true;
   productData
  nameObj:any;
  // userForm=new FormGroup({name :new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(7)]),
  // email:new FormControl(''),age:new FormControl('',Validators.required),
  // address:new FormGroup({street:new FormControl(),
  //   city:new FormControl(),state:new FormControl(),postelcode:new FormControl()})})
  userForm=new FormGroup({name:new FormControl('abhishek',[Validators.required,Validators.minLength(6)])})
  ngOnInit() {
   // debugger
    console.log("productdata",productdata)
    this.products=productdata;
    // this.httpClient.get("assets/data.json").subscribe(data =>{
    //   console.log("product data ");
    
    //   this.productData=data
    //   // this.products = data;
    // })
  }
  sendProduct(){
  this.product.setProduct(this.products)
      this.router.navigateByUrl('productDetails')

  }
  onSubmit()
  {

    console.log(this.userForm.value)
    this.nameObj=this.userForm.value
    console.log(this.nameObj.name)
    if(this.nameObj.name==='abhishek'){
        alert("hello")
      this.router.navigateByUrl('/productDetails')
    }

  }
}

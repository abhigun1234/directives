import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
import {Router} from '@angular/router'
import {FormGroup,FormControl,Validators} from '@angular/forms'

 @Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products=[{id:"1",name:'addidas',price:'2345'},{id:"1",name:'nike',price:'2345'}]
  constructor(private product :ProductService,private router:Router) { }
  flag=true;
  nameObj:any;
  // userForm=new FormGroup({name :new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(7)]),
  // email:new FormControl(''),age:new FormControl('',Validators.required),
  // address:new FormGroup({street:new FormControl(),
  //   city:new FormControl(),state:new FormControl(),postelcode:new FormControl()})})
  userForm=new FormGroup({name:new FormControl('abhishek',[Validators.required,Validators.minLength(6)])})
  ngOnInit() {
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

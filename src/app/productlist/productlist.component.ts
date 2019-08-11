import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productDetails=[
    {"id":"1","name":"addidas","description":"sports","price":"2345"},
  {"id":"2","name":"rebook","description":"sports","price":"3453"},
  {"id":"3","name":"nike","description":"sports","price":"9453"}
]
  constructor() { }

  ngOnInit() {
  }

}

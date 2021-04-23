import { AfterViewInit, ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit,AfterViewInit {
  name:string='abhishek'
  @ViewChild('data') data:ElementRef;
  @ViewChild('child1') childone:ElementRef;
  @ViewChild('child2') childtwo:ElementRef;
  constructor() {  alert("constructor")}

  ngOnInit() {
  alert("ngOnInit")
  }
  ngAfterViewInit(){
    alert("ngAfterViewInit")
    console.log("data",this.data)
    //  this.data.nativeElement.style.backgroundColor="yellow"
     this.childone.nativeElement.style.color='blue'
     this.childtwo.nativeElement.style.color='green'
    // this.data.nativeElement.innerHTML="hi hello"
  }

}

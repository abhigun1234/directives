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
  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit(){
    console.log("data",this.data)
    // this.data.nativeElement.style.backgroundColor="blue"
    this.data.nativeElement.innerHTML="hi hello"
  }

}

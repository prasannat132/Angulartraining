import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
demodata:string="test data";

  constructor() { }

  ngOnInit(): void {
  }
showAlert(){
  alert("Hello world");
  this.demodata="Hello";
}
}

import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }
  @Input() msg=""
  @Output() save= new EventEmitter();
  @Input() user:any=""

  ngOnInit(): void {
  }
  uname=""
  DOB:any
  city=""
  info( values:any){
    this.user=values

  }

}

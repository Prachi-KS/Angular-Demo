import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  text1:any
  test:any
  @Output() data=new EventEmitter();
  work(v:any){
    this.test=v
  }
  uname=""
  DOB:any
  city=""
  users:any=[1,2,3]
  submit(){
    this.users.push(this.uname)
    this.users.push(this.city)
    this.users.push(this.DOB)
    console.log(this.users)


  }

}

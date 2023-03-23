import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apiinfo',
  templateUrl: './apiinfo.component.html',
  styleUrls: ['./apiinfo.component.css']
})
export class ApiinfoComponent implements OnInit {

  constructor(public api:ApiService) { }
msg=""
user=""
test1="test"

users:any=[]
  ngOnInit(): void {
    this.msg=this.api.servicemsg
    this.user=this.api.getinfo()
  this.api.getusers().subscribe((user:any)=>{
    this.users=user
  })

  }
  serviced(){

  }


}

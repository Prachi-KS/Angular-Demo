import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginsService } from 'src/app/logins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,public logins:LoginsService) { }

  ngOnInit(): void {
  }
  uname=""
  pwd=""
  check(){
    this.logins.checkuser(this.uname,this.pwd)
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
import { LoginsService } from 'src/app/logins.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public fb:FormBuilder,public logins:LoginsService) { }

  ngOnInit(): void {
  }
  registerForm=this.fb.group({
    'username':this.fb.control("",Validators.required),
    'email':this.fb.control("",Validators.required),
    'contact':this.fb.control("",Validators.required),
    'pwd1':this.fb.control("",Validators.required),
    'pwd2':this.fb.control("",Validators.required)
  })
  register(){
    this.logins.adduser(this.registerForm.controls.username.value,this.registerForm.controls.pwd1.value)
  }

}

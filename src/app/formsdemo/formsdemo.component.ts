import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formsdemo',
  templateUrl: './formsdemo.component.html',
  styleUrls: ['./formsdemo.component.css']
})
export class FormsdemoComponent implements OnInit {

  constructor(public fb :FormBuilder) { }

  ngOnInit(): void {
    console.log(this.registerForm)
    
  }
  registerForm:any=this.fb.group({
    'username':this.fb.control("",Validators.required),
    'Name':this.fb.group(
      {
      'f_name':this.fb.control('',Validators.required),
      'l_name':this.fb.control(''),
          }
    ),
    'email':this.fb.control("",[Validators.required,Validators.pattern('')]),
    'contactno':this.fb.control("",
    [Validators.required,
     Validators.minLength(10),
     Validators.maxLength(10)]),
    'DOB':this.fb.control("",Validators.required),
    'gender':this.fb.control("",Validators.required),
    'courses':this.fb.control("",Validators.required),
    'subscribe':this.fb.control("",Validators.required)
  })
  users:any=[]
  login(){
    this.users.push(this.registerForm.value)
    //console.log(this.registerForm.controls.username)

  }
  course=['Python',"Angular","Web development","Data Scientist"]

}

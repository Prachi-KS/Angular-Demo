import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {
  authcanactivate: any = false
  // username: any = ['admin']
  // password: any = ['12345']
  users:any=[{'uname':'admin','pwd':'12345'}]
  constructor(public router: Router) { }
  checkuser(uname: any, pwd: any) {
    console.log(this.users)


    var flag=0
    for (let i = 0; i < this.users.length; i++) 
    {
      if ((uname == this.users[i].uname) && (pwd ==this.users[i].pwd)) 
      {
        flag=1
      }
    }

    if(flag==1){
      this.router.navigate(['/store'])

        this.authcanactivate = true
    }
    else{
      alert("sorry something went wrong")
      this.router.navigate(['/admin/login'])
      this.authcanactivate = false
    }

  }

  adduser(uname:any,pwd:any){
    console.log(uname)
    this.users.push({'uname':uname,'pwd':pwd})
    //this.password.push(pwd)

  }
}

     
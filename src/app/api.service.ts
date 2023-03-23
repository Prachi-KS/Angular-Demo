import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  servicemsg="hi i am in services"
  getinfo()
  {
    return "I am in srvice function"
  }
  getdata(n:any){
    console.log(n)
  }
  getusers(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
  getproducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }



}

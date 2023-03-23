import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-promisesandobeserve',
  templateUrl: './promisesandobeserve.component.html',
  styleUrls: ['./promisesandobeserve.component.css']
})
export class PromisesandobeserveComponent implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit(): void {
    // console.log(this.api.getproducts().subscribe())
    //observable how many 5 different functions or api call all get conencted
    //promise first on call other next an try error then  promise
    // this.greet()
    this.promise.then((result:any)=>{
      console.log("Promise is working ",result)
    })

    this.observable.subscribe((result:any)=>{
      console.log("Observable is working ",result)
    })
  } 

promise:any=new Promise(resolve=>{
  resolve("data is promise 1"),
  resolve("data is promise 2"),
  resolve("data is promise 3"),
  resolve("data is promise 4")
});

observable:any=new Observable(obsever=>{
  obsever.next("observe 1"),
  obsever.next("observe 2")
  obsever.next("observe 3")
  obsever.next("observe 4")

})


}

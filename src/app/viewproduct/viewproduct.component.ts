import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(public ar:ActivatedRoute,public api:ApiService) { }
oneproduct:any
product:any
products:any
  ngOnInit(): void {
    this.ar.params.subscribe((p)=>{
      this.oneproduct=p
    })
    this.api.getproducts().subscribe((p)=>{
      this.products=p
    })
    //let id=parseInt(this.oneproduct.id)
    
    
    
    // this.product=this.products.filter((pro:any)=>{
    //   if (this.oneproduct.id==pro.id){
    //     return true
    //   }
    //   else{
    //     return false
    //   }
    // })


  }

}

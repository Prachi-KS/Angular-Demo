import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor( public api:ApiService) { }
products:any
  ngOnInit(): void {
    this.api.getproducts().subscribe((product)=>{
      this.products=product

    })


  }
  catname:any=undefined
    
  cat=["electronics","jewelery","men's clothing","women's clothing"]
cat_pipe:any

}

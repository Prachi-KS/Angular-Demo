import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition} from '@angular/animations';
// import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-gameflip',
  templateUrl: './gameflip.component.html',
  styleUrls: ['./gameflip.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})


export class GameflipComponent implements OnInit {

  constructor() { 
    console.log("its working")
  }
  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  ngOnInit(): void {
    this.random()
    console.log(this.c2)
  }
  cardArray=[1,2,3,4,5,6]
  c2:any=[]
  random(){
  for(let i=0;i<=this.cardArray.length;i++){
    let num = Math.floor(Math.random() * this.cardArray.length+1)    
    if(!this.c2.includes(num)){
      this.c2.push(num)}
      else{
        if(this.c2.length<6)
        {this.random()}
      }
      }
    }

  flip:string='inactive';
    
  toggleFlip(x:any) {
    
        if(this.flip=='inactive'){
          this.flip='active'
      }
    
  }
  
    //this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }



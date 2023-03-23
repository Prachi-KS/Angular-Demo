import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goto()
  {
    this.router.navigate(['/products'])
  }
  taskid:any
  tname:any
  tdesc:any
  tasks:any=[
    {'tid':11,'tname':'Angular','td':'Directives'},
    {'tid':15,'tname':'SQL','td':'JOins and views'},
    {'tid':3  ,'tname':'Django','td':'Models and forms'},
  ]
  enter(){
    this.tasks.push({'tid':this.taskid,'tname':this.tname,'td':this.tdesc})
  }
  task:any={'tid':0,'tname':"",'td':''}
    
  update(n:any){
    n=parseInt(n)
    for(let i=0;i<this.tasks.length;i++){
      if(n==this.tasks[i].tid){
        this.task=this.tasks[i]

      }
    }
  }
  edit(){
   //  alert("data updated successfully")

  }
  delete(n:any){
    n=parseInt(n)
    this.tasks.splice(n,1)
    

  }

}

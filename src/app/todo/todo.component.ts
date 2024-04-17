import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //=============> Variables  starts here <=============
  todoErr:boolean=false
  showerr:boolean=false

 
  constructor(private authservice:AuthService) { }

 

  ngOnInit(): void {
  }

  todoDetails={
    title:"",
    startdate:new Date(),
    enddate:new Date(),
    desc:""
  }

  OnSubmit(){
    console.log("in todo comp",this.todoDetails)

    let todoData=this.authservice.TodoStore(this.todoDetails.title,this.todoDetails.startdate,this.todoDetails.enddate,this.todoDetails.desc)

    if(todoData){
      this.todoErr=true
      console.log("submitted successfull")
    }
    else{
      console.log("submitted failed")
      this.todoErr=false
    }


  }

}

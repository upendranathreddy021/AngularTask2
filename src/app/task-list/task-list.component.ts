import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private authservice:AuthService) {
  
   }

  ngOnInit(): void {
  }

allTodo=this.authservice.getAllTodos();


viewall(){
  console.log(this.allTodo)
}


}

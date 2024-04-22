import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoDetails = {
    title: "",
    startdate: "",
    enddate: "",
    desc: ""
  };
  isFailed: boolean = false;
  isSuccess: boolean = false;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  canSubmit(): boolean {
    return this.todoDetails.title && this.todoDetails.startdate &&
           this.todoDetails.enddate && this.todoDetails.desc &&
           new Date(this.todoDetails.startdate) < new Date(this.todoDetails.enddate);
  }

  onSubmit() {
    if (!this.canSubmit()) {
      this.isFailed = true;
      this.isSuccess = false;
      return;
    }

    const startDate = new Date(this.todoDetails.startdate);
    const endDate = new Date(this.todoDetails.enddate);
    let todoData = this.authService.TodoStore(this.todoDetails.title, startDate, endDate, this.todoDetails.desc);

    if (todoData) {
      this.resetForm();
      this.isFailed = false;
      this.isSuccess = true;
      setTimeout(() => { this.isSuccess = false; }, 2500);
    } else {
      this.isFailed = true;
      this.isSuccess = false;
      setTimeout(() => { this.isFailed = false; }, 2500);
    }
  }

  resetForm() {
    this.todoDetails = {
      title: "",
      startdate: "",
      enddate: "",
      desc: ""
    };
  }
}

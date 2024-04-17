import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input'
import {MatTableModule} from '@angular/material/table'

import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent={} as PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(private authservice:AuthService) { }
allTodo:any[]=[]

  ngOnInit(): void {
   
    this.allTodo = this.authservice.getAllTodos()
  }

displayedColumns: string[] = ['title', 'startdate', 'enddate', 'desc'];

  

  viewall(){
   
   
  }

}

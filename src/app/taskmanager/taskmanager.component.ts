import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
currentId:number=0

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent={} as PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(private authservice:AuthService,private cdr:ChangeDetectorRef) { setTimeout(() => {
    this.ngOnInit()
   }, 500);}

//============================> all array intialization starts here <===============
  allTodo:any[]=[]
allCompletedTodo:any[]=[]
allAdminTodo:any[]=[]
allAdminCompletedTodo:any[]=[]
tokenDetails:any=[]



isAdmin:boolean=false




  ngOnInit(): void {
   
    this.allTodo = this.authservice.getAllTodos()
this.allCompletedTodo=this.authservice.getCompletedTasks()

//accessing token details from auth 
//this.tokenDetails=this.authservice.getTokenDetails()
setTimeout(() => {
  this.viewall()
}, 1000);
this.authservice.getTokenDetails().subscribe(data => {
  this.tokenDetails = data;
  if (this.tokenDetails && this.tokenDetails.isRole !== undefined) {
    this.isAdmin = this.tokenDetails.isRole;  // Assign isRole to isAdmin
  }

});
//getting all admin todo 
this.allAdminTodo=this.authservice.getAdminTodos()
this.allAdminCompletedTodo=this.authservice.allAdminCompletedTodoFun()
//console.log("token detail",this.tokenDetails,"all todos",this.allAdminTodo)





  }


displayedColumns: string[] = ['title', 'startdate', 'enddate', 'desc','email'];

  

  viewall(){
    console.log("tokend data",this.tokenDetails,"isadmin details",this.isAdmin)
  }


  completeTask(todo:any){
    this.currentId=todo.id
    
    this.authservice.completedTasksFun(todo)
    //this.cdr.detectChanges();
   // this.cdr.markForCheck()
   //this.ngOnInit()

    this.allTodo = this.authservice.getAllTodos()
    this.allCompletedTodo=this.authservice.getCompletedTasks()
  

   // console.log("token detail",this.tokenDetails,"all todos",this.allAdminTodo)
  }

  sortByStartDate(): void {
    this.allTodo.sort((a, b) => new Date(a.startdate).getTime() - new Date(b.startdate).getTime());
    this.allCompletedTodo.sort((a, b) => new Date(a.startdate).getTime() - new Date(b.startdate).getTime());
    this.allAdminTodo.sort((a, b) => new Date(a.startdate).getTime() - new Date(b.startdate).getTime());
    this.allAdminCompletedTodo.sort((a, b) => new Date(a.startdate).getTime() - new Date(b.startdate).getTime());
  }

  sortByEndDate(): void {
    this.allTodo.sort((a, b) => new Date(a.enddate).getTime() - new Date(b.enddate).getTime());
    this.allCompletedTodo.sort((a, b) => new Date(a.enddate).getTime() - new Date(b.enddate).getTime());
    this.allAdminTodo.sort((a, b) => new Date(a.enddate).getTime() - new Date(b.enddate).getTime());
    this.allAdminCompletedTodo.sort((a, b) => new Date(a.enddate).getTime() - new Date(b.enddate).getTime());
  }
  



}



/* import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input'
import {MatTableModule} from '@angular/material/table'
import { MatTableDataSource } from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})


export class TaskmanagerComponent implements OnInit {
currentId:number=0

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent={} as PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(private authservice:AuthService,private cdr:ChangeDetectorRef) { setTimeout(() => {
    this.ngOnInit()
   }, 500);}

//============================> all array intialization starts here <===============
  allTodo:any[]=[]
allCompletedTodo:any[]=[]
allAdminTodo:any[]=[]
allAdminCompletedTodo:any[]=[]
tokenDetails:any=[]
 

isAdmin:boolean=false

dataSource = new MatTableDataSource<any>(this.allAdminCompletedTodo);  // Replace ELEMENT_DATA with your data array

@ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;



  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.allTodo = this.authservice.getAllTodos()
this.allCompletedTodo=this.authservice.getCompletedTasks()

//accessing token details from auth 
//this.tokenDetails=this.authservice.getTokenDetails()
// setTimeout(() => {
//   this.viewall()
// }, 1000);
this.authservice.getTokenDetails().subscribe(data => {
  this.tokenDetails = data;
  if (this.tokenDetails && this.tokenDetails.isRole !== undefined) {
    this.isAdmin = this.tokenDetails.isRole;  // Assign isRole to isAdmin
  }

});
//getting all admin todo 
this.allAdminTodo=this.authservice.getAdminTodos()
this.allAdminCompletedTodo=this.authservice.allAdminCompletedTodoFun()
//console.log("token detail",this.tokenDetails,"all todos",this.allAdminTodo)





  }


displayedColumns: string[] = ['title', 'startdate', 'enddate', 'desc','completed'];

  

  viewall(){
    console.log("tokend data",this.tokenDetails,"isadmin details",this.isAdmin)
  }


  completeTask(todo:any){
    this.currentId=todo.id
    
    this.authservice.completedTasksFun(todo)
    this.cdr.detectChanges();
    this.cdr.markForCheck()
   this.ngOnInit()

    this.allTodo = this.authservice.getAllTodos()
    this.allCompletedTodo=this.authservice.getCompletedTasks()
  

   console.log("token detail",this.tokenDetails,"all todos",this.allAdminTodo)
  }


  



}
*/
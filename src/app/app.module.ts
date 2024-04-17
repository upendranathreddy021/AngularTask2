import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CalenderComponent } from './calender/calender.component';
import { FormsModule } from '@angular/forms';
import { RouteConfigLoadEnd, RouterModule,Routes } from '@angular/router';
import { InvalidCompComponent } from './invalid-comp/invalid-comp.component';
import { GlobalComponent } from './global/global.component';
import { AuthService } from './Services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input'
import {MatTableModule} from '@angular/material/table'

const appRoutes:Routes=[
  {path:"",component:LoginComponent},
  {path:"todo",component:TodoComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"taskmanager",component:TaskmanagerComponent},
  {path:"tasklist",component:TodoListComponent},
  {path:"calender",component:CalenderComponent},
  {path:"**",component:InvalidCompComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TodoListComponent,
    TodoComponent,
    LoginComponent,
    RegisterComponent,
    CalenderComponent,
    GlobalComponent,
    NavbarComponent,
    TaskmanagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule.forRoot(appRoutes),MatInputModule,MatTableModule, BrowserAnimationsModule,MatPaginatorModule
  ],
  exports:[RouterModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

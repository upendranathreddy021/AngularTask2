import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CalenderComponent } from './calender/calender.component';
import { FormsModule } from '@angular/forms';
import {  RouterModule,Routes } from '@angular/router';
import { InvalidCompComponent } from './invalid-comp/invalid-comp.component';
import { GlobalComponent } from './global/global.component';
import { AuthService } from './Services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input'
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';
import { LoginupdatedComponent } from './loginupdated/loginupdated.component';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MapsComponent } from './maps/maps.component';
//import { ChartsComponent } from './charts/charts.component';

//import { HighchartsChartModule } from 'highcharts-angular';



const appRoutes:Routes=[
  {path:"",component:LoginComponent},
  {path:"todo",component:TodoComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"taskmanager",component:TaskmanagerComponent},
  {path:"tasklist",component:TodoListComponent},
  {path:"calender",component:CalenderComponent},
  {path:"comments",component:CommentsComponent},
  {path:'maps',component:MapsComponent},
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
    TaskmanagerComponent,
    CommentsComponent,
    LoginupdatedComponent,
    MapsComponent
  
  ],
  imports: [FormsModule,
    // CommonModule,NgbModalModule ,FlatpickrModule.forRoot(),
    //  CalendarModule.forRoot({
    //    provide: DateAdapter,
    //    useFactory: adapterFactory,
    //  }),
    BrowserModule,BrowserAnimationsModule,CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),

    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,MatTableModule,
     ReactiveFormsModule,BrowserAnimationsModule,
     MatPaginatorModule,HttpClientModule,ReactiveFormsModule
     //,HighchartsChartModule
  ],
  exports:[RouterModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

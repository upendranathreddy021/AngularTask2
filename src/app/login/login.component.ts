import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//===========> variables start here <========
LoginErr:boolean=false





  // Object to store user credentials
  userCredentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {
  }

  OnSubmit() {
    //console.log('User Credentials:', this.userCredentials);
   
 //====================> Auth service validation starts here <================
  let result=this.authservice.LoginValidation(this.userCredentials.email,this.userCredentials.password)

  if(result){
this.router.navigate(['todo'])
this.LoginErr=true
  }
  else{
    this.LoginErr=false


  }

    
  }
  // Navigate to register page
  NavigateTo() {
    this.router.navigate(['register']);
  }

 









}

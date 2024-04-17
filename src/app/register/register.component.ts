import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


//=================> Variables start from here  <====================
RegistrationError:boolean=false;







  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  RegCredentials={
    fullname:'',
    email:'',
    password:''
  }
  OnSubmit():void{
    console.log(this.RegCredentials)
  //pushing the details to regstartion method in auth service

  let result=this.authservice.registerMethod(this.RegCredentials.fullname,this.RegCredentials.email,this.RegCredentials.password)
  

  if(result){

this.RegistrationError=true
//redirecting to login page after successfull registration page

this.router.navigate(['login'])


//making register input fields empty after submitting
this.RegCredentials={
  fullname:'',
  email:'',
  password:""
}
  }
  else{
    this.RegistrationError=false

  }

  }

}

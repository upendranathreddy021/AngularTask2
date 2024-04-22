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

// registerDetails={
//   fullname:"",
//   email:"",password:"",role:""
// }





  constructor(private authservice:AuthService,private router:Router) { }

showExist:boolean=false;

selectedRole:string='';

role:string=this.selectedRole
  ngOnInit(): void {
//settimout function for exist statment

  }
  
  RegCredentials={
    fullname:'',
    email:'',
    password:'',
    role:this.role
  }

//   canSubmit():boolean{
// return this.RegCredentials.fullname && this.RegCredentials.email && this.RegCredentials.password && this.RegCredentials.role
//   }

 
  
  OnSubmit():void{
    this.RegCredentials.role=this.selectedRole
    console.log(this.RegCredentials)
    console.log(this.selectedRole)
    console.log(this.RegCredentials)
  //pushing the details to regstartion method in auth service

  let result=this.authservice.registerMethod(this.RegCredentials.fullname,this.RegCredentials.email,this.RegCredentials.password,this.RegCredentials.role)
  

  if(result){

this.RegistrationError=true

this.showExist=false
//redirecting to login page after successfull registration page

this.router.navigate(['login'])


//making register input fields empty after submitting
this.RegCredentials={
  fullname:'',
  email:'',
  password:"",
  role:this.role

}
  }
  else{
    this.showExist=true;
    this.RegistrationError=false
    setTimeout(()=>{this.showExist=false},2000)

  }

  }

}


/*import { FormGroup, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
export class registerComponent implements OnInit {
  registerForm: FormGroup;
showExist:boolean=false
  constructor(private authservice: AuthService, private router: Router) { 
    this.registerForm = new FormGroup({
      fullname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('')
    });
    
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      let result = this.authservice.registerMethod(
        this.registerForm.value.fullname,
        this.registerForm.value.email,
        this.registerForm.value.password
      );

      if (result) {
        this.router.navigate(['login']);
        this.registerForm.reset();
      } else {
        this.showExist = true;
        setTimeout(() => { this.showExist = false; }, 2000);
      }
    }
  }
}
 */
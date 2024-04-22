import { Component,OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  constructor(private authservice:AuthService) { }
tokenDetails:any=[]

  showNavbar: boolean = true;  
    navVisible:boolean=false
    
    ngOnInit():void{
     this.tokenDetails=this.authservice.getTokenDetails()
      this.navVisible=this.tokenDetails[this.tokenDetails.length-1].isLogin
   


      setTimeout(() => {
        this.viewall()
      }, 1000);
      this.authservice.getTokenDetails().subscribe(data => {
        this.tokenDetails = data;
        if (this.tokenDetails && this.tokenDetails.isRole !== undefined) {
          this.navVisible = this.tokenDetails.isLogin;  // Assign islogin to nav visible
        }
      
      });
   
    }

  onNavChange(newValue: boolean) {
    this.showNavbar = newValue;  
  }

  viewall(){

  }
}

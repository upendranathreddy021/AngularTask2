import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() navChange = new EventEmitter<boolean>();
  showNav: boolean = true;
  navVisible:boolean=true

  constructor(private authservice:AuthService,private router:Router) { 

    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe((event: NavigationEnd) => {
    //    Logic to determine if the navbar should be shown
    //   this.navVisible = !['/login', '/register'].includes(event.urlAfterRedirects);
    // });
  
    
  }
  tokenDetails:any=[]

 ngOnInit():void{

  this.tokenDetails=this.authservice.getTokenDetails()
  this.navVisible=this.tokenDetails[this.tokenDetails.length-1].isLogin
  console.log("=========",this.navVisible)

  
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
 
  

  toggleNavVisibility() {
    this.showNav = !this.showNav; 
    this.navChange.emit(this.showNav);  
  }

  logout() {
    this.showNav = false; 
    this.navChange.emit(this.showNav);  
    localStorage.removeItem('token');  
    window.location.href = '/login'; 
  }

  viewall(){

  }
}

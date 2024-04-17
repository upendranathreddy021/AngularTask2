import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() navChange = new EventEmitter<boolean>();
  showNav: boolean = true;

  constructor() { }

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
}

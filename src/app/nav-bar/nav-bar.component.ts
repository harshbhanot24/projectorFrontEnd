import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthGuard} from '../auth/auth.gaurd';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  obj=new AuthGuard();
  constructor(private router:Router) { }

  ngOnInit() {
  }
  edit(){
    this.router.navigate(['/profile']);
  }
  submit(){
    this.router.navigate(['/post']);
  }
logout(){
  
  localStorage.clear();
  this.router.navigate(['']);
}
admin(){
  
  this.router.navigate(['/Admin']);
}
login(){
 this.router.navigate(['/login']);
}
signup(){
  this.router.navigate(['/signup']);
}
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDataService } from '../Services/user-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserDataService, private router:Router) { }

  ngOnInit() {
    const helper = new JwtHelperService();
    if (localStorage.getItem('token') && helper.isTokenExpired(localStorage.getItem('token'))) {
      this.router.navigate(['/post']);
    }
  }
  flag:String=null;
  type:'primary';
  loginForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',
      [Validators.required, Validators.pattern('^.{4,8}$')])
    }
  );
  login(){
      this.service.login(this.loginForm.value).subscribe(
        (res:any)=>{
          if (res.status==200){
           if(!localStorage.getItem('token')){
             localStorage.setItem('token',res.token);
             
             this.router.navigate(['/post']);
            }
            else{
              localStorage.removeItem('token')//remove old token 
              localStorage.setItem('token',res.token);
              this.router.navigateByUrl('/post');
            }
            
          }
        },
        (err)=>{  
          console.log(err.error)
      this.ResetForm(err.error);
    }
    ,()=>console.log('completed')
    );
  }
   ResetForm(err){
  this.loginForm.reset();
  this.flag=err.err;
  setTimeout(()=>{
    this.flag=null;
  },5000)
 }
  get Email(){
   return this.loginForm.get('email');
 }
  get Password(){
   return this.loginForm.get('password');
 }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {DataService} from '../Services/data.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:DataService, private router:Router) { }

  ngOnInit() {
    const helper = new JwtHelperService();
    if (localStorage.getItem('token') && helper.isTokenExpired(localStorage.getItem('token'))) {
      this.router.navigate(['/post']);
    }
  }
  flag:String=null;
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
          if (res.body.status==200){
            console.log('inside res200')
           if(!localStorage.getItem('token')){
             localStorage.setItem('token',res.body.token);
             console.log('inside set token')
             this.router.navigate(['/post']);
            }
            else{
              console.log('else working')
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
  },3000)
 }
  get Email(){
   return this.loginForm.get('email');
 }
  get Password(){
   return this.loginForm.get('password');
 }
}
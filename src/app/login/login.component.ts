import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {DataService} from '../Services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:DataService, private router:Router) { }

  ngOnInit() {
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
    console.log('logging happening')
      this.service.login(this.loginForm.value).subscribe(
        (res:Response)=>{console.log(res.status)
          if (res.status==200){
            
            this.router.navigate(['/post']);
            console.log('hy status')
          }
        },
        (err)=>{  
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
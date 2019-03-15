import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {DataService} from '../Services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:DataService) { }

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
        (res)=>console.log(res),
        (err)=>{
      this.ResetForm(err);
    }
    ,()=>console.log('completed')
    );
  }
   ResetForm(err){
   console.log('hy this is the error',err)
  this.loginForm.reset();
  this.flag=err.error;
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
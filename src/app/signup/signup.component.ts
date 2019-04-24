import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorFunctions } from '../common/form.validators';

import { Router } from '@angular/router';
import { UserDataService } from '../Services/user-data.service';
import { AnimationQueryMetadata } from '@angular/animations';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:UserDataService,private router:Router) { }
flag:String=null;
type:'danger';
  ngOnInit() {
  }
  signUpForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      passwords: new FormGroup(
        {
          password: new FormControl('',
            [Validators.required, Validators.pattern('^.{4,8}$')]),
          ConfirmPassword: new FormControl('',
            [Validators.required, Validators.pattern('^.{4,8}$')])
        },ValidatorFunctions.passwordMatchValidator)
    }
  );
  con(){
    console.log(this.signUpForm)
  }
  get Email(){
   return this.signUpForm.get('email');
 }
  get Password(){
   return this.signUpForm.get('passwords.password');
 }
 get ConfirmPassword(){
   return this.signUpForm.get('passwords.ConfirmPassword');
 }
 get GroupPasswords(){
      return this.signUpForm.get('passwords');
 }
 SignUp(){
   console.log('logging happening')
this.service.SignUp(this.signUpForm.value).subscribe(
  (res:Response)=>{
    localStorage.removeItem('token')
    this.ResetForm();
    this.router.navigate(['/login']);
  },
    (err)=>{
      this.ResetForm(err);
    }
    ,()=>console.log('completed')
    );
 }
 ResetForm(err?:any){
   console.log('resetcalled'+JSON.stringify(err))
  this.signUpForm.reset();
  if(err)
  this.flag=err.error.err;
  else
  this.flag='Account created successfully redirecting to login'
  setTimeout(()=>{
    this.flag=null;
  },5000)
 }
}
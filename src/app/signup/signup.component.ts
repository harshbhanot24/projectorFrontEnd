import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorFunctions } from '../common/form.validators';
import {DataService} from '../Services/data.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:DataService) { }
flag:String=null;
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
  (res)=>console.log(res),
    (err)=>{
      this.ResetForm(err);
    }
    ,()=>console.log('completed')
    );
 }
 ResetForm(err){
   console.log('hy this is the error',err)
  this.signUpForm.reset();
  this.flag=err.error;
  setTimeout(()=>{
    this.flag=null;
  },3000)
 }
}
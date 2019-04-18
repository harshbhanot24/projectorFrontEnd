import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorFunctions } from '../common/form.validators';
import {DataService} from '../Services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:DataService,private router:Router) { }
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
  (res:Response)=>{
    this.ResetForm('Accont created successfully,Login Now');
    this.router.navigate(['/login']);
  },
    (err)=>{
      this.ResetForm(err);
    }
    ,()=>console.log('completed')
    );
 }
 ResetForm(err){
  this.signUpForm.reset();
  this.flag=err.error;
  setTimeout(()=>{
    this.flag=null;
  },5000)
 }
}
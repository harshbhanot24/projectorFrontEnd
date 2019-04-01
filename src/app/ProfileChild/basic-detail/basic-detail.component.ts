import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {UserDataService} from '../../Services/user-data.service';
@Component({
  selector: 'app-basic-detail',
  templateUrl: './basic-detail.component.html',
  styleUrls: ['./basic-detail.component.css']
})
export class BasicDetailComponent implements OnInit {

  constructor(private service:UserDataService) { }
private user;
  ngOnInit() {
    this.user=this.service.GetDetails(3);
      this.setDefaultForm(this.user);
    
  }
        BasicDetailForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern('^.{4,8}$')]),
      userName:new FormControl('', [Validators.required]),
      gender:new FormControl('',[Validators.required]),
      file :new FormControl('')
    }

  );
  
   setDefaultForm(user){
      this.BasicDetailForm.get('email').setValue(user.email);
      this.BasicDetailForm.get('password').setValue(user.password);
      this.BasicDetailForm.get('userName').setValue(user.userName);
      this.BasicDetailForm.get('gender').setValue(user.gender);
   }//to set default values from data coming form database
   
   //to get data from FormGroup
   get Email(){
   return this.BasicDetailForm.get('email');
 }
  get Password(){
   return this.BasicDetailForm.get('password');
 }
 get userName(){
   return this.BasicDetailForm.get('userName');
 }
  }

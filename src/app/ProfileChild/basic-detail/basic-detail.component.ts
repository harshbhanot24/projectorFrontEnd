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
  this.service.GetDetails('5ca901e5852be73e38710a00')
  .subscribe((res)=>{
    this.user=res;
    console.log(this.user)
    this.setDefaultForm(this.user);
}
  )//have to thing of a logic to handle user session best way   
  }
  SaveChanges(){
    console.log("save changes working",this.BasicDetailForm.value)
    this.service.saveBasicDetails('5ca901e5852be73e38710a09',this.BasicDetailForm.value).subscribe((res)=>{
      console.log("this is",res)
    });
  }
        BasicDetailForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern('^.{4,8}$')]),
      UserName:new FormControl('', [Validators.required]),
      gender:new FormControl('',[Validators.required]),
      file :new FormControl('')
    }

  );
  
   setDefaultForm(user){
     console.log('i ma inside set default',user.email)
      this.BasicDetailForm.get('email').setValue(user.email);
      this.BasicDetailForm.get('password').setValue(user.password);
      this.BasicDetailForm.get('UserName').setValue(user.UserName);
      this.BasicDetailForm.get('gender').setValue(user.gender);
   }//to set default values from data coming form database
   
   //to get data from FormGroup
   get Email(){
   return this.BasicDetailForm.get('email');
 }
  get Password(){
   return this.BasicDetailForm.get('password');
 }
 get UserName(){
   return this.BasicDetailForm.get('UserName');
 }
  }

import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormControl,FormArray} from '@angular/forms';
import {FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
@Component({
  selector: 'app-submit-post',
  templateUrl: './submit-post.component.html',
  styleUrls: ['./submit-post.component.css']
})
export class SubmitPostComponent implements OnInit {
  form=new FormGroup(
{
  heading:new FormControl('',{validators:[Validators.required,Validators.minLength(3),Validators.maxLength(5)],updateOn: 'blur'}),
  details:new FormControl('',[Validators.required,Validators.minLength(10)]),
  file: new FormControl(''),
  tags:new FormControl('',Validators.required),
  NewTags:new FormArray([],)
}
 );//end of form group
 get Heading(){
   return this.form.get('heading');
 }
 get GetDetails(){
   return this.form.get('details');
 }
 addTag(Newtag: HTMLInputElement){
  this.NewTag.push(new FormControl(Newtag.value))
  Newtag.value='';
 }
 get NewTag(){
   return this.form.get('NewTags') as FormArray;
 }
 RemoveTopic(tags){
   let index=this.NewTag.controls.indexOf(tags);
   this.NewTag.removeAt(index);
 }
  constructor() { }

  ngOnInit() {
  }

}
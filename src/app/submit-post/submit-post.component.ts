import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormControl,FormArray} from '@angular/forms';
import {FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import {FileSelectDirective,FileUploader} from 'ng2-file-upload';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { DataService } from '../Services/data.service';
@Component({
  selector: 'app-submit-post',
  templateUrl: './submit-post.component.html',
  styleUrls: ['./submit-post.component.css']
})
export class SubmitPostComponent implements OnInit {
  private url:string="http://localhost:3000/posts";
uploader:FileUploader=new FileUploader({url:this.url})
attachmentList:any=[];
constructor(public http: HttpClient,private service:DataService){

     this.uploader.onCompleteItem=(Item:any,response:any,status:any)=>{
       console.log("this is response",response);
        this.attachmentList.push(response);
        console.log(this.attachmentList)
     }
}
Remove(Item){
  let id=this.attachmentList.indexOf(Item)
  this.attachmentList.slice(id,1);
}
ONsubmit(){
  let post={
        form:this.form.value,
        uploadFileList:this.attachmentList
  }
  if(this.form.value.heading!=""){
    console.log("sumbit wrking",this.form.value)
  this.service.submit(post).subscribe(
    (res)=>{console.log(res)
     this.attachmentList="";//so that new post can be done
      this.form.reset();
    },
    (err)=>{console.log(err)
      this.form.reset();}//reset form after error occur

  )
    }//so as to not send emptyform needmore logic here though
}
  form=new FormGroup(
{
  heading:new FormControl('',{validators:[Validators.required,Validators.minLength(3),Validators.maxLength(5)],updateOn: 'blur'}),
  details:new FormControl('',[Validators.required,Validators.minLength(10)]),
 
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
 

  ngOnInit() {
  }

}
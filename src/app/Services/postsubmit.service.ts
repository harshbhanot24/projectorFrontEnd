
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Subject,Observable} from 'rxjs';
import { AppError, NotFoundError } from './../common';
import {Post} from '../model/post';
import {User} from '../model/user';
import {FileSelectDirective,FileUploader} from 'ng2-file-upload';
@Injectable()
export class DataService {

  
private url:string="https://fast-waters-72330.herokuapp.com";
uploader:FileUploader=new FileUploader({url:this.url})
attachmentList:any=[];
constructor(public http: HttpClient){
     this.uploader.onCompleteItem=(Item:any,response:any,status:any,header:any)=>{
        this.attachmentList.push(JSON.parse(response));
     }
}
  getAll(){
    return this.http.get(this.url)
    .pipe(catchError(this.handleError));
  }

  create(resource){
    return this.http.post(this.url,JSON.stringify(resource))
    .pipe(catchError(this.handleError));
  }
  
  update(resource){
    return this.http.patch(this.url+'/'+resource.id, JSON.stringify(resource))
    .pipe(catchError(this.handleError));
  }

  delete(id){
    return this.http.delete(this.url+'/'+id)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: Response){
    if(error.status === 400){
      return throwError(new NotFoundError())
    }
    return throwError(new AppError(error));
  }
getViews(){
  return 5;
}
getPosts(){
  var body=`Forms are probably the most crucial aspect of your web application. While we often get events from
clicking on links or moving the mouse, it’s through forms where we get the majority of our rich data
input from users.
On the surface, forms seem straightforward: you make an input tag, the user fills it out, and hits
submit. How hard could it be?
`;
  var post=new Post('1','This is a sample heading for the project',body,'12/3/2019',6,0,['scince','arts','maths'],['google.com']);
  
  return post;
}
getUser(){
var user= new User();
user['id']='1';
user['name']='harsh bhanot';
user['AvatarUrl']='https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png';

return user;
}

}

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Subject,Observable} from 'rxjs';
import { AppError, NotFoundError } from './../common';

import {FileSelectDirective,FileUploader} from 'ng2-file-upload';
@Injectable()
export class DataService {

  
private url:string="http://localhost:3000";
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


}
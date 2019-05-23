import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError, NotFoundError } from './../common';


@Injectable()
export class DataService {

  constructor(public http: HttpClient){}
private url1:string="https://fast-waters-72330.herokuapp.com";
private url:string="http://localhost:3000";
submit(post){
  let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('x-auth-token', localStorage.getItem('token'));
  return this.http.post(`${this.url}/form`,post,{headers:headers});
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
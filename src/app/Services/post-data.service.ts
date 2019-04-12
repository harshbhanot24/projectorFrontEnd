import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(public http: HttpClient){}
  private url:string="http://localhost:3000";
  
  GetPosts(){
    return this.http.get(`${this.url}/form`)
  //logic to get user ID wuill be here
  }
  getPost(id){
    return this.http.get(`${this.url}/form/${id}`);
  }
}

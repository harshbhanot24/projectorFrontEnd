import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserDataService {
  saveBasicDetails(id: string, BasicDetailForm ){
  return this.http.put(this.url+'/user/'+id,BasicDetailForm);
  }
  saveCollegeDetails(id: string, BasicDetailForm ){
    return this.http.put(this.url+'/user/college/'+id,BasicDetailForm);
    }

constructor(public http: HttpClient){}
private url1:string="https://fast-waters-72330.herokuapp.com";
private url:string="http://localhost:3000";
GetDetails(id){
   console.log(this.url+'/user/'+id);
//logic to get user ID wuill be here
return this.http.get(this.url+'/user/'+id)
}
SignUp(user){
  return this.http.post(`${this.url}/signUp`,user)
 }
 
   login(user){
    return this.http.post(`${this.url}/login`,user)
   }
}
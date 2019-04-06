import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserDataService {
  saveBasicDetails(id: string, BasicDetailForm ){
  return this.http.put(this.url+'/'+id,BasicDetailForm);
  }
  saveCollegeDetails(id: string, BasicDetailForm ){
    return this.http.put(this.url+'/college/'+id,BasicDetailForm);
    }

constructor(public http: HttpClient){}
private url:string="http://localhost:3000/user";

GetDetails(id){
   console.log(this.url+'/'+id);
//logic to get user ID wuill be here
return this.http.get(this.url+'/'+id)
}

}
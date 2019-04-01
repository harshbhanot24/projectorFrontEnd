import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserDataService {

constructor(public http: HttpClient){}
private url:string="http://localhost:3000";

GetDetails(id){
//logic to get user ID wuill be here
return {
   'email': "DemoEmail@google.com",
      'password': "demo",
      'userName':"user1",
      'gender':"male"
      }
}
}
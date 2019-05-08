import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
user;
  constructor(private service:UserDataService) { }
  helper = new JwtHelperService();
  decodedToken = this.helper.decodeToken(localStorage.getItem('token'));
   id=this.decodedToken._id;
  ngOnInit() {   
    this.service.GetDetails(this.id)
    .subscribe((res)=>{
      this.user=res;
      console.log("work on oninit",this.user)
      
  });
}
}

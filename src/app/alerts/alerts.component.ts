import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
@Input('alertMsg') alertMsg;
@Input('type') type;

  constructor() { 
    console.log("constructor called")
  }
  alert={
   msg:'',
    type:'',
    timeout: 5000,
    dismissible:true
  }
  
  ngOnInit() {
    this.alert.msg=this.alertMsg;
    this.alert.type=this.type || 'danger'
   

}
}

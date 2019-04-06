import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/Services/user-data.service';
@Component({
  selector: 'app-company-college',
  templateUrl: './company-college.component.html',
  styleUrls: ['./company-college.component.css']
})
export class CompanyCollegeComponent implements OnInit{

  constructor(private service:UserDataService) { }
  private user;
  ngOnInit() {
    this.service.GetDetails('5ca901e5852be73e38710a00')
  .subscribe((res)=>{
    this.user=res;
    console.log(this.user)
    this.setDefaultForm(this.user);
  });
}
SaveChanges(){
  console.log("save changes working",this.WorkDetailForm.value)
  this.service.saveCollegeDetails('5ca901e5852be73e38710a00',this.WorkDetailForm.value).subscribe((res)=>{
    console.log("this is",res)
  });
}
WorkDetailForm = new FormGroup(
    {
      College: new FormControl('', [Validators.required]),
      University: new FormControl('',[Validators.required]),
      Specialization:new FormControl('', [Validators.required]),
      PassingYear:new FormControl('',[Validators.required,Validators.min(1950),Validators.max(2050)]),
      Company :new FormControl(''),
      currentWork :new FormControl('',[Validators.required]) 
    });
  

 //setting forms default values
 setDefaultForm(user){
  console.log('i ma inside set default',user.email)
   this.WorkDetailForm.get('College').setValue(user.College);
   this.WorkDetailForm.get('University').setValue(user.University);
   this.WorkDetailForm.get('Specialization').setValue(user.Specialization);
   this.WorkDetailForm.get('Company').setValue(user.Company);
   this.WorkDetailForm.get('PassingYear').setValue(user.PassingYear);
   this.WorkDetailForm.get('currentWork').setValue(user.currentWork);
}//to set default values from data coming form database

//to get data from FormGroup
get College(){
return this.WorkDetailForm.get('College');
}
get University(){
return this.WorkDetailForm.get('University');
}

get PassingYear(){
return this.WorkDetailForm.get('PassingYear');
}
get Specialization(){
return this.WorkDetailForm.get('Specialization');
}
get Company(){
  return this.WorkDetailForm.get('Company');
  }
  get currentWork(){
    return this.WorkDetailForm.get('currentWorks');
    }
}   


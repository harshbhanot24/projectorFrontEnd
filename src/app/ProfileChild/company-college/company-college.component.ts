import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-company-college',
  templateUrl: './company-college.component.html',
  styleUrls: ['./company-college.component.css']
})
export class CompanyCollegeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCollegeComponent } from './company-college.component';

describe('CompanyCollegeComponent', () => {
  let component: CompanyCollegeComponent;
  let fixture: ComponentFixture<CompanyCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

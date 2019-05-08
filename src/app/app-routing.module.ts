import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {LoginComponent} from './login/login.component';

import {SignupComponent} from './signup/signup.component';
import {SubmitPostComponent} from './submit-post/submit-post.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicDetailComponent } from './ProfileChild/basic-detail/basic-detail.component';
import { CompanyCollegeComponent } from './ProfileChild/company-college/company-college.component';
import { PreferencesComponent } from './ProfileChild/preferences/preferences.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { AuthGuard } from './auth/auth.gaurd';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  {path:'post/:id',component:SinglePostComponent},
  {path:'post',component:SubmitPostComponent,canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  
  {path:'Admin',component:AdminPanelComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,
  children:[ {
    path: "",
    component: BasicDetailComponent
    
  },
 
  {
    path: "Basic",
    component: BasicDetailComponent
    
  },
{
  path: "Company",
  component: CompanyCollegeComponent
},
{
  path:"preference",
  component:PreferencesComponent
}
],canActivate: [AuthGuard] },
{path:'',component:HomeComponent,pathMatch: 'full'}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

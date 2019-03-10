import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {LoginComponent} from './login/login.component';

import {SignupComponent} from './signup/signup.component';
import {SubmitPostComponent} from './submit-post/submit-post.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'postProject',component:SubmitPostComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

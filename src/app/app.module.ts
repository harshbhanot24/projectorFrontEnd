import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ViewsComponent } from './views/views.component';
import { DataService } from './Services/data.service';
import { PostComponent } from './post/post.component';
import { LikeComponent } from './like/like.component';
import {DemoMaterialModule} from './matStyle';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SubmitPostComponent } from './submit-post/submit-post.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FilterTopComponent } from './filter-top/filter-top.component';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    PostComponent,
    LikeComponent,
    NavBarComponent,
    SubmitPostComponent,
    HomeComponent,
    PostsComponent,
    LoginComponent,
    SignupComponent,
    FilterTopComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatButtonModule, MatCheckboxModule,
    AppRoutingModule,DemoMaterialModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

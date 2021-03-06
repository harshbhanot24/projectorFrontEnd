import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RatingModule } from 'ngx-bootstrap/rating';
import { AlertModule } from 'ngx-bootstrap/alert';

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
import {FileUploadModule} from 'ng2-file-upload';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicDetailComponent } from './ProfileChild/basic-detail/basic-detail.component';
import { CompanyCollegeComponent } from './ProfileChild/company-college/company-college.component';
import { PreferencesComponent } from './ProfileChild/preferences/preferences.component';
import { UserDataService } from './Services/user-data.service';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SinglePostComponent } from './single-post/single-post.component';
import { AuthorFilterComponent } from './filters/author-filter/author-filter.component';
import { AlertsComponent } from './alerts/alerts.component';
import { RatingComponent } from './plugins/rating/rating.component';
import { CarousalComponent } from './carousal/carousal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

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
    FilterTopComponent,
    RatingComponent,
    AdminComponent,
    ProfileComponent,
    BasicDetailComponent,
    CompanyCollegeComponent,
    PreferencesComponent,
    SinglePostComponent,
    AuthorFilterComponent,
    AlertsComponent,
    CarousalComponent,
    AdminPanelComponent
  ],
  imports: [FileUploadModule,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),AlertModule.forRoot(),
    BrowserModule,BrowserAnimationsModule,BsDropdownModule.forRoot(),RatingModule.forRoot(),CarouselModule.forRoot(),
    AppRoutingModule,DemoMaterialModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [DataService,UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Input,Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data.service';

import {User} from '../model/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('PostData') post;

private user:User;
  constructor(private service:DataService,private router:Router) { }

  ngOnInit() {
    this.user=this.service.getUser();
    //this.post=this.service.getPosts();
    
  }
  getPost(){
    this.router.navigateByUrl(`/post/${this.post._id}`);
  }
}
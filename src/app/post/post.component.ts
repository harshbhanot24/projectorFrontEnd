import { Input,Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('PostData') post;

 user:any;
  constructor(private router:Router) { }

  ngOnInit() {
    //this.post=this.service.getPosts();
    
  }
  getPost(){
    this.router.navigateByUrl(`/post/${this.post._id}`);
  }
}
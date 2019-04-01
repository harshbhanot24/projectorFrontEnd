import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../Services/post-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
loop:number[]=[1,2,3,4,5,6,7,8,9,10];
 posts;
 PostData:Object[];
  constructor(private service:PostDataService) { }

  ngOnInit() {
    this.service.GetPosts().subscribe(
      (res)=>{this.posts=(res)
     this.PostData=this.posts.Data;
     console.log(this.PostData)
    }
    ,(err)=>console.log(err)
    )
  }

}
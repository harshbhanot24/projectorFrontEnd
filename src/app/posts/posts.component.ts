import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../Services/post-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 posts;
 PopularPost;
 PostData:Object[];
  constructor(private service:PostDataService) { }

  ngOnInit() {
    this.service.GetPosts().subscribe(
      (res)=>{this.posts=(res)
     this.PostData=this.posts.Data;
     this.PopularPost=this.posts.Data.map((item:any)=>{
        return item.heading;
     })
    }
    ,(err)=>console.log(err)
    )
  }

}
import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../Services/post-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
private postId;
private post;
  constructor(private service:PostDataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((res)=>{
      this.postId=res.get('id');
     this.service.getPost(this.postId).subscribe((post:Response)=>{
       
        this.post=post['Data'];
        console.log(this.post)
   
       
     });
        })
  }

}

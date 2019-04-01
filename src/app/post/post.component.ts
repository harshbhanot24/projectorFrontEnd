import { Input,Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data.service';
import {Post} from '../model/post';
import {User} from '../model/user';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input('PostData') post;

private user:User;
  constructor(private service:DataService) { }

  ngOnInit() {
    this.user=this.service.getUser();
    //this.post=this.service.getPosts();
    
  }

}
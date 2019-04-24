import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Output('likeData') likeData = new EventEmitter();
  @Input('likeInput') likeInput;
  like:number;
 thumbs: string;
  constructor() { }

  ngOnInit() {
    if(!this.likeInput){
      this.like=0;
    }else
    this.like = this.likeInput;//0,1,-1 o nothing 1 like -1 dislike
    if(this.like==0){
      this.thumbs="fa fa-thumbs-o-up";
    }
    if(this.like==1){
      this.thumbs="fa fa-thumbs-up";
    }
    else if(this.like==-1){
      this.thumbs="fa fa-thumbs-down";
    }
  }
  OnClick() {
    if(this.like==0){
      this.thumbs="fa fa-thumbs-up";
       this.like=1;
    }
     if(this.like==1){
      this.thumbs="fa fa-thumbs-down";
      this.like=-1;
    }
    else if(this.like==-1){
      this.thumbs="fa fa-thumbs-up";
       this.like=1;
    }
    this.likeData.emit(this.like);
  }
}
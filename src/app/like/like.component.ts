import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Output('likeData') likeData = new EventEmitter();
  @Input('likeInput') likeInput;
  private like: boolean;
  private star: string = 'star';
  constructor() { }

  ngOnInit() {
    this.like = this.likeInput;
  }
  OnClick() {

    this.like = !this.like;
    if (!this.like) {
      this.star = 'star_border';
    } else {
      this.star = 'star';
    }
    this.likeData.emit(this.like);
  }
}
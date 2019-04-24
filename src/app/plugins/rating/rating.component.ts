import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
@Input() average;
@Input() RatedNumber;
  constructor() { }

  ngOnInit() {
    this.rate=this.average;
  }
  max = 10;
  isReadonly = false;
 rate =0;
  overStar: number | undefined;
  percent: number;
 
  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
    
  }
 
  resetStar(): void {
    this.overStar = void 0;
  }

}

import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent {
 @Input() views:number;
  

}
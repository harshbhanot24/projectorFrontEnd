import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
 public data=[{'id':1,'Name':'JAVA','Count':124342},{'id':2,'Name':'Python','Count':3212},{'id':3,'Name':'Angular','Count':13232},{'id':4,'Name':'JAVA','Count':14332},{'id':5,'Name':'JAVA','Count':12322}];
  Tag;
  public TagArray:String[]=[];
  count=121;
  errorMsg="";
  id=12;//will come form db
  constructor() { }

  ngOnInit() {
    this.Tag="";
  
  }
Search(){
  let newTag={
    'id':this.id++,
    'Name':this.Tag,
    'Count':this.count
  }
  this.data.pop();
this.data.unshift(newTag)
this.Tag="";
}
AddTag(id){
 
if(this.TagArray.indexOf(id)>=0){
 
  this.TagArray.splice(this.TagArray.indexOf(id),1);
}else if(this.TagArray.length<6){
 
  this.TagArray.push(id);
}
console.log(this.TagArray)
}
}
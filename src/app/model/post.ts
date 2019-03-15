export class Post {
  
  
  constructor(private id:string,
  private heading:string,
  private description:string,
  private date:string,
  private view:number,
  private like:number,
  private tags?:string[],
  private links?:string[]){

  }
}

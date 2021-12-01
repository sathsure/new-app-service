import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: [{ heading: string; content: string; newDate: Date }] = [
    { heading: 'First Heading', content: 'First Content', newDate: new Date() },
  ];

  postChanged = new EventEmitter<[{ heading: string; content: string; newDate: Date }]>();
  getPosts() {
      return this.posts.slice();
  }

  addPost($event:any){
    this.posts.push($event);
    this.postChanged.emit(this.posts);
  }

  deletePost(index:number) {
    this.posts.splice(index,1);
    this.postChanged.emit(this.posts);
  }

}
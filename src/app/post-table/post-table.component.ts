import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  posts: any;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postService.postChanged.subscribe((data) => {
      this.posts = data;
    });
  }

  onDelete(index: number) {
    this.postService.deletePost(index);
  }
}

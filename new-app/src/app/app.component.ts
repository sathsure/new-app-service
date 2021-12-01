import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // VIEW-ENCAPSULATION
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title: string = 'Post Application';
  onChangeInput: string = '';
  toggleBtn: boolean = false;
  buttonLabel:string = 'Add';
  status = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Good');
    }, 3000);
  });

  constructor(private postService: PostService) {
    // console.log('Parent Constructor');
  }

  ngOnInit() {
    // console.log('Parent ngOnInit');
  }

  onToggle() {
    this.toggleBtn = !this.toggleBtn;
    this.buttonLabel = this.toggleBtn ? 'Remove' : 'Add';
  }
}

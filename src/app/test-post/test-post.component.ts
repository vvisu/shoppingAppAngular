import { Component, OnInit } from '@angular/core';

import { PostServiceService } from '../service/post-service.service';

import {Post} from '../models/post.model';

@Component({
  selector: 'app-test-post',
  templateUrl: './test-post.component.html',
  styleUrls: ['./test-post.component.css']
})
export class TestPostComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostServiceService) {

  }

  ngOnInit() {


  }

  getPosts()
  {
      this.postService.getPosts().subscribe((posts) => {

          console.log(posts);
          this.posts = posts
      }
      );

  }

}

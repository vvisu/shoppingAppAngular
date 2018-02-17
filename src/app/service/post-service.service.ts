import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model'; 


@Injectable()
export class PostServiceService {


    url: string = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient) { }



  getPosts() :Observable<Post[]>
  {
      return this.http.get<Post[]>(this.url);
  }
}

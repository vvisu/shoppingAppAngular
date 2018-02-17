import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photo } from '../models/photo.model';
@Injectable()
export class PhotoService {

    
  constructor(private http:HttpClient) { }



  getPhotos(): Observable<Photo[]>
  {
      return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos`);

  }
}

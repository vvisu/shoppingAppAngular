import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photo.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.css']
})
export class PhotosPageComponent implements OnInit {
    photos: Photo[];

    constructor(private photoService: PhotoService) { }

  ngOnInit() {

      this.loadAllPhotos();
  }

  loadAllPhotos() {
      this.photoService.getPhotos().subscribe(photos => {
          this.photos = photos;
          console.log(photos);
      }
      );
  }
}

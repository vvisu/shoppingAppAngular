import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './items/item.model';
import { TestPostComponent } from './test-post/test-post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostServiceService } from '../app/service/post-service.service';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { PhotoService } from '../app/service/photo.service';
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    TestPostComponent,
    PhotosPageComponent
    
  ],
  imports: [
      BrowserModule,
      HttpClientModule
  ],
  providers: [PostServiceService,
      PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

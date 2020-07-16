import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';

import { photosReducer } from './reducer/photos';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ photos: photosReducer }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IPhoto } from './components/types';
import { storePhotos } from './actions/photos';

@Component({
  selector: 'ns-root',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit {
  constructor(private http: HttpClient,
              private store: Store) {}

  ngOnInit() {
    this.fetchPhotos();
  }

  fetchPhotos() {
      this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((response: Array<IPhoto>) => {
      const data = response;

      this.storePhotos(data);
    });
  }

  storePhotos(data: Array<IPhoto>) {
    const photos = data.filter((photo: IPhoto) => photo.id < 10);
    this.store.dispatch(storePhotos(photos));
  }
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IPhoto } from '../types';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { deletePhoto, changePhoto } from '../../actions/photos';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'photos-component',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PhotosComponent implements OnInit {
    photos: Observable<Array<IPhoto>>;
    showChange = false;

    constructor(private store: Store<{ photos: Array<IPhoto> }>) {}

    ngOnInit() {
        this.photos = this.store.pipe(select('photos'));
    }

    onChange(id: number) {
      this.showChange = true;

      this.store.dispatch(changePhoto(id));
      this.photos = this.store.pipe(select('photos'));
    }

    onDelete(id: number) {
      this.store.dispatch(deletePhoto(id));
      this.photos = this.store.pipe(select('photos'));
    }
}

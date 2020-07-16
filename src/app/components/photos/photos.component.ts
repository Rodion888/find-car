import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';

import { IPhoto } from '../types';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'photos-component',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PhotosComponent implements OnInit {
    photos: Observable<Array<IPhoto>>;

    constructor(private store: Store<{ photos: Array<IPhoto> }>) {}

    ngOnInit() {
        this.photos = this.store.pipe(select('photos'));
    }
}

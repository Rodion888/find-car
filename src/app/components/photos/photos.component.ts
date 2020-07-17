import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IPhoto } from '../types';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { deletePhoto, changePhoto } from '../../actions/photos';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'photos-component',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})

export class PhotosComponent implements OnInit {
    photos: Observable<Array<IPhoto>>;
    showChange = false;

    constructor(private store: Store<{ photos: Array<IPhoto> }>,
                public dialog: MatDialog) {}

    ngOnInit() {
        this.photos = this.store.pipe(select('photos'));
    }

    onChange(title: string, id: number) {
      this.showChange = true;

      this.store.dispatch(changePhoto(title, id));
      this.photos = this.store.pipe(select('photos'));
    }

    onDelete(id: number) {
      this.store.dispatch(deletePhoto(id));
      this.photos = this.store.pipe(select('photos'));
    }

    openDialog(photo: IPhoto, type: string): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: type === 'edit-photo' ? '300px' : '600px',
        data: {
          photo,
          type,
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const { title, id } = result;
          this.onChange(title, id);
        }
      });
    }
}

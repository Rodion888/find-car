import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IPhoto } from '../types';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})

export class DialogComponent {
    title: string;
    type: string;

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { photo: IPhoto, type: string }) {
            this.title = data.photo.title;
            this.type = data.type;
    }

    onClose(): void {
        this.dialogRef.close();
    }

    changeTitle(title: string): void {
        this.title = title;
    }
}

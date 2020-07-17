import { createAction } from '@ngrx/store';
import { IPhoto } from '../components/types';

export const storePhotos = createAction('[App Component] StorePhotos', (photos: Array<IPhoto>) => {
    return {
        photos
    };
});

export const deletePhoto = createAction('[Photos Component] DeletePhoto', (id: number) => {
    return {
        id
    };
});

export const changePhoto = createAction('[Photos Component] ChangePhoto', (title: string, id: number) => {
    return {
        title, id
    };
});

import { createReducer, on } from '@ngrx/store';
import { storePhotos, deletePhoto } from '../actions/photos';
import { IPhoto } from '../components/types';

export const initialState = [];

const mainReducer = createReducer(initialState,
    on(storePhotos, (_, { photos }) => {
        return photos;
    }),
    on(deletePhoto, (state, { id }) => {
        const changedPhotos = state.filter((photo: IPhoto) => photo.id !== id);
        return changedPhotos;
    })
);

export function photosReducer(state: any, action: any) {
  return mainReducer(state, action);
}

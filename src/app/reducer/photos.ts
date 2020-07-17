import { createReducer, on } from '@ngrx/store';

import { storePhotos, deletePhoto, changePhoto } from '../actions/photos';
import { IPhoto } from '../components/types';

export const initialState = [];

const mainReducer = createReducer(initialState,
    on(storePhotos, (_, { photos }) => {
        return photos;
    }),
    on(deletePhoto, (state, { id }) => {
        return state.filter((photo: IPhoto) => photo.id !== id);
    }),
    on(changePhoto, (state, { title, id }) => {
        const photos = state.map((photo: IPhoto) => {
            if (photo.id === id) {
                return {
                    ...photo,
                    title
                };
            }
            return photo;
        });
        return photos;
    })
);

export function photosReducer(state: any, action: any) {
  return mainReducer(state, action);
}

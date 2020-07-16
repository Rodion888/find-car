import { createReducer, on } from '@ngrx/store';
import { storePhotos } from '../actions/counter';

export const initialState = {
    photos: []
};

const mainReducer = createReducer(initialState,
    on(storePhotos, (state, { photos }) => {
        return {
            ...state,
            photos
        };
    })
);

export function photosReducer(state: any, action: any) {
  return mainReducer(state, action);
}

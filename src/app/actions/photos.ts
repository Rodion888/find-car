import { createAction } from '@ngrx/store';

export const storePhotos = createAction('[App Component] StorePhotos', photos => {
    return {
        photos
    };
});

export const deletePhoto = createAction('[Photos Component] DeletePhoto', id => {
    return {
        id
    };
});

export const changePhoto = createAction('[Photos Component] ChangePhoto', id => {
    return {
        id
    };
});

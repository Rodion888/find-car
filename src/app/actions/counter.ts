import { createAction } from '@ngrx/store';

export const storePhotos = createAction('[Photos Component] StorePhotos', photos => {
    return {
        photos
    };
});

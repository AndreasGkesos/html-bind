import { createAction, props } from "@ngrx/store";
import { ContentModel } from "../models/content.model";

export const getDetailsContentSuccess = createAction(
    '[Context API] get details content success',
    props<{data: ContentModel}>()
);

export const getDetailsContentFailure = createAction(
    '[Context API] get details content failure',
    props<{error: string}>()
);
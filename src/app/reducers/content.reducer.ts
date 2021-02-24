import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AppState from '../state/app.state'
import * as ContentActions from '../state/content.actions'
import * as ContentApiActions from '../state/content-api.actions'
import { ContentModel } from "../models/content.model";

export interface State extends AppState.State {
    products: ContentState;
  }

export interface ContentState {
    test: boolean,
    detailsContent: ContentModel
}

const initialState: ContentState = {
    test: true,
    detailsContent: new ContentModel()
};

const getContentFeatureState = createFeatureSelector<ContentState>('content');

export const getTestproperty = createSelector(
    getContentFeatureState,
    state => state.test
);

export const getDetailsContent = createSelector(
    getContentFeatureState,
    state => state.detailsContent
);

export const contentReducer = createReducer<ContentState>(
    initialState,
    on(ContentActions.setTestproperty, (state): ContentState => {
        console.log('original state: ' + JSON.stringify(state));
        return {
            ...state,
            test: false
        };
    }),
    on(ContentApiActions.getDetailsContentSuccess, (state, action): ContentState => {
        return {
            ...state,
            detailsContent: action.data
        }
    })
);
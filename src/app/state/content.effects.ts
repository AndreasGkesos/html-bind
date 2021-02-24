import { NetworkService } from './../services/network.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ContentApiActions from '../state/content-api.actions'
import * as ContentActions from '../state/content.actions'
import { mergeMap, map } from 'rxjs/operators'
import { ContentModel } from '../models/content.model';

@Injectable()
export class ContentEffects {

    constructor(private actions$: Actions,
                private networkSetvice: NetworkService) {}

    getDetailsContent$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ContentActions.getDetailsContent),
            mergeMap( () => this.networkSetvice.getDetails().pipe(
                map(detailContent => ContentApiActions.getDetailsContentSuccess({ data: detailContent as ContentModel}))
            ))
        )
    });
}
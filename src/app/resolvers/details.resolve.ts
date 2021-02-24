import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';
import { State } from '../reducers/content.reducer';
import * as ContentActions from '../state/content.actions'

@Injectable()
export class DetailsResolver implements Resolve<any> {
  constructor(private store: Store<State>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    this.store.dispatch(ContentActions.setTestproperty());
    this.store.dispatch(ContentActions.getDetailsContent());
  }
}
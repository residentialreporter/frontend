import { Injectable } from '@angular/core';
import { EntityActionTypes, EntityOperators, ofEntityType } from '@briebug/ngrx-auto-entity';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Location } from '@residentialreporter/models/location';
import { Go } from './router/router.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class LocationEffects {
    @Effect()
    createSuccess$: Observable<Action> = this.actions$.pipe(
        ofEntityType(Location, EntityActionTypes.CreateSuccess),
        tap(() => this.matSnackBar.open('Location Created', 'Success', {duration: 2000})),
        map(() => new Go({path: ['locations']}))
    );

    @Effect({dispatch: false})
    deleteSuccessSnackBar$ = this.actions$.pipe(
        ofEntityType(Location, EntityActionTypes.DeleteSuccess),
        tap(() => this.matSnackBar.open('Location Deleted', 'Success', {duration: 2000}))
    );

    @Effect()
    updateSuccessSnackBar$ = this.actions$.pipe(
        ofEntityType(Location, EntityActionTypes.UpdateSuccess),
        tap(() => this.matSnackBar.open('Location Updated', 'Success', {duration: 2000})),
        map(() => new Go({path: ['locations']}))
    );

    constructor(private actions$: Actions, private ops: EntityOperators, private matSnackBar: MatSnackBar) {
    }
}

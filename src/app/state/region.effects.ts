import { Injectable } from '@angular/core';
import { EntityActionTypes, EntityOperators, ofEntityType } from '@briebug/ngrx-auto-entity';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Region } from '@residentialreporter/models/region';
import { Go } from './router/router.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class RegionEffects {
    @Effect()
    createSuccess$: Observable<Action> = this.actions$.pipe(
        ofEntityType(Region, EntityActionTypes.CreateSuccess),
        tap(() => this.matSnackBar.open('Region Created', 'Success', {duration: 2000})),
        map(() => new Go({path: ['regions']}))
    );

    @Effect({dispatch: false})
    deleteSuccessSnackBar$ = this.actions$.pipe(
        ofEntityType(Region, EntityActionTypes.DeleteSuccess),
        tap(() => {
            console.log('[REGION] Hello!'); // TODO: Remove once this part works.
            this.matSnackBar.open('Region Deleted', 'Success', {duration: 2000});
        })
    );

    @Effect()
    updateSuccessSnackBar$ = this.actions$.pipe(
        ofEntityType(Region, EntityActionTypes.UpdateSuccess),
        tap(() => this.matSnackBar.open('Region Updated', 'Success', {duration: 2000})),
        map(() => new Go({path: ['regions']}))
    );

    constructor(private actions$: Actions, private ops: EntityOperators, private matSnackBar: MatSnackBar) {
    }
}

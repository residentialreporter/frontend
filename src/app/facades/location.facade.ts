import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@residentialreporter/state/app.state';
import { LocationFacadeBase } from '../state/location.state';
import { Location } from '@residentialreporter/models/location';

@Injectable({providedIn: 'root'})
export class LocationFacade extends LocationFacadeBase {
    constructor(store: Store<AppState>) {
        super(Location, store);
    }

    // TODO: Extend your facade's functionality here!
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@residentialreporter/state/app.state';
import { RegionFacadeBase } from '../state/region.state';
import { Region } from '@residentialreporter/models/region';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RegionFacade extends RegionFacadeBase {
    constructor(store: Store<AppState>) {
        super(Region, store);
    }

    get active$(): Observable<Region[]> {
        return this.all$.pipe(map(regions => regions.filter(region => region.active)));
    }

    top$(count: number): Observable<Region[]> {
        return this.active$.pipe(map(regions => regions.slice(0, count)));
    }
}

import { IEntityState } from '@briebug/ngrx-auto-entity';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IRouterStateUrl } from '@residentialreporter/state/shared/utils';
import { storeFreeze } from 'ngrx-store-freeze';
import { Region } from '../models/region';
import { RegionReducer } from './region.state';
import { Location } from '@residentialreporter/models/location';
import { LocationReducer } from '@residentialreporter/state/location.state';

export interface IAppState {
    router: RouterReducerState<IRouterStateUrl>;
    region: IEntityState<Region>;
    location: IEntityState<Location>;
}

export type AppState = IAppState;

export const appReducer: ActionReducerMap<AppState> = {
    router: routerReducer,
    location: LocationReducer,
    region: RegionReducer
};

export const appMetaReducers: Array<MetaReducer<AppState>> = !environment.production ? [storeFreeze] : [];

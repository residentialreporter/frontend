import { buildState, IEntityState } from '@briebug/ngrx-auto-entity';
import { Location } from '@residentialreporter/models/location';

export const {initialState, facade: LocationFacadeBase} = buildState(Location);

// A "stub" reducer is required to support AOT
export function LocationReducer(state = initialState): IEntityState<Location> {
    return state;
}

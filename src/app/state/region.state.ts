import { buildState, IEntityState } from '@briebug/ngrx-auto-entity';
import { Region } from '@residentialreporter/models/region';

export const {initialState, facade: RegionFacadeBase} = buildState(Region);

// A "stub" reducer is required to support AOT
export function RegionReducer(state = initialState): IEntityState<Region> {
    return state;
}

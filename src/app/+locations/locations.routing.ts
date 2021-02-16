import { Routes } from '@angular/router';
import { LocationComponent } from './containers/location/location.component';
import { LocationsComponent } from './containers/locations/locations.component';
import { LocationsMapComponent } from './containers/locations-map/locations-map.component';

export const routes: Routes = [
    {
        path: '',
        component: LocationsComponent
    },
    {
        path: 'map',
        component: LocationsMapComponent
    },
    {
        path: 'add',
        component: LocationComponent
    },
    {
        path: ':id',
        component: LocationComponent
    }
];

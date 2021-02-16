import { Routes } from '@angular/router';
import { RegionComponent } from './containers/region/region.component';
import { RegionsComponent } from './containers/regions/regions.component';

export const routes: Routes = [
    {
        path: '',
        component: RegionsComponent
    },
    {
        path: 'add',
        component: RegionComponent
    },
    {
        path: ':uuid',
        component: RegionComponent
    }
];

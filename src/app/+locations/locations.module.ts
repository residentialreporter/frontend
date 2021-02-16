import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';

import { MaterialModule } from './../material.module';
import { LocationFormComponent } from './components/location-form/location-form.component';
import { LocationsTableComponent } from './components/locations-table/locations-table.component';
import { LocationComponent } from './containers/location/location.component';
import { LocationsComponent } from './containers/locations/locations.component';
import { routes } from './locations.routing';
import { CoreModule } from '@residentialreporter/core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { LocationsMapComponent } from './containers/locations-map/locations-map.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FlexLayoutModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        NgrxAutoEntityModule.forFeature(),
        CoreModule,
        TranslateModule
    ],
    declarations: [LocationComponent, LocationFormComponent, LocationsComponent, LocationsTableComponent, LocationsMapComponent]
})
export class LocationsModule {
}

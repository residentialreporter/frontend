import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectEditorComponent } from '@residentialreporter/components/objecteditor/objecteditor.component';
import { LeafletMapSelectPlaceComponent } from '@residentialreporter/components/leaflet-map-select-place/leaflet-map-select-place.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MaterialModule } from '@residentialreporter/material.module';
import { LeafletMapLocationsComponent } from '@residentialreporter/components/leaflet-map-locations/leaflet-map-locations.component';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { TranslateModule } from '@ngx-translate/core';
import { InPipe } from './in.pipe';
import { AnyInPipe } from './any-in.pipe';

@NgModule({
    declarations: [
        ObjectEditorComponent,
        LeafletMapSelectPlaceComponent,
        LeafletMapLocationsComponent,
        InPipe,
        AnyInPipe,
    ],
    exports: [
        ObjectEditorComponent,
        LeafletMapSelectPlaceComponent,
        LeafletMapLocationsComponent,
        AnyInPipe,
        TranslateModule
    ],
    imports: [
        CommonModule,
        LeafletModule,
        LeafletMarkerClusterModule,
        TranslateModule,
        MaterialModule,
    ]
})
export class CoreModule {
}

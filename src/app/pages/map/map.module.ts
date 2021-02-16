import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MapPageComponent } from './map-page.component';

import { MapPageRoutingModule } from './map-routing.module';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MapPageRoutingModule,
        LeafletModule
    ],
    declarations: [MapPageComponent]
})
export class MapPageModule {
}

import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output, SimpleChanges,
    ViewChild
} from '@angular/core';
import { Location } from '@residentialreporter/models/location';
import { LocationFacade } from '@residentialreporter/facades/location.facade';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { icon, latLng, marker, tileLayer } from 'leaflet';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RegionFacade } from '../../facades/region.facade';
import { Region } from '../../models/region';
import * as L from 'leaflet';

@Component({
    selector: 'app-map',
    templateUrl: 'map-page.component.html',
    styleUrls: ['map-page.component.scss'],
})
export class MapPageComponent implements OnInit {
    location$: Observable<Location>;
    regions$: Observable<Region[]>;

    options = {
        layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
        ],
        zoom: 7,
        center: latLng(51.1, 10.5)
    };
    layersControl = {
        baseLayers: {
            'Open Street Map': tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'}),
            'Open Cycle Map': tileLayer('https://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
        },
        overlays: {}
    };

    layers = [
        marker([52.879966, 12.726909], {
            icon: icon({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: 'assets/marker-icon.png',
                shadowUrl: 'assets/marker-shadow.png'
            })
        })
    ];

    constructor(
        private activatedRoute: ActivatedRoute,
        private regionFacade: RegionFacade
    ) {
    }


    ngOnInit() {
        this.regionFacade.loadAll();
        this.regions$ = this.regionFacade.all$;
        console.log("REGIONS IN MAP:", this.regions$);

    }
}

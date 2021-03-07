import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

import * as L from 'leaflet';
import 'leaflet.markercluster';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-leaflet-map-locations',
    templateUrl: './leaflet-map-locations.component.html',
    styleUrls: ['./leaflet-map-locations.component.scss']
})
export class LeafletMapLocationsComponent implements OnInit, OnChanges {
    @Input() center: typeof latLng;
    @Input() zoom: number;
    @Input() places: any;
    @Input() fullscreen: boolean;
    @Output() position: typeof latLng;

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
    layers = [];

    markerClusterGroup: L.MarkerClusterGroup;
    markerClusterData: L.Marker[] = [];
    markerClusterOptions: L.MarkerClusterGroupOptions;

    constructor() {
    }

    ngOnInit() {

    }

    ngOnChanges(simpleChanges: SimpleChanges) {
        if (simpleChanges.places && simpleChanges.places.currentValue) {
            this.markerClusterData = this.generateData();
        }
    }

    markerClusterReady(group: L.MarkerClusterGroup) {

        this.markerClusterGroup = group;

    }

    generateData(): L.Marker[] {

        const data: L.Marker[] = [];

        console.log('[MAP-PLACES] Places:', this.places);
        for (const item of this.places) {
            console.log('ITEM:', item);
            const icon = L.icon({
                iconSize: [ 25, 41 ],
                iconAnchor: [ 13, 41 ],
                iconRetinaUrl: 'assets/marker-icon-2x.png',
                iconUrl: 'assets/marker-icon.png',
                shadowUrl: 'assets/marker-shadow.png',
            });

            if (typeof item.coordinate !== 'undefined') {
                const marker = new this.extendedMarker().on('click', this.displayLocation)
                data.push(marker);
            } else {
                console.log('[MAP-PLACES] Place without coordinates. Both frontend and backend should have prevented this...', item);
            }
        }

        console.log(data);
        return data;

    }

    onClick(event) {
        console.log('[MAP-SELECTOR] Clicked at ', event);
        this.center = event.latlng;
    }

    onMapReady(event) {
        console.log('[MAP-SELECTOR] Ready:', event);
    }

}

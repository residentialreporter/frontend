import { Component, forwardRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { icon, latLng, marker, tileLayer } from 'leaflet';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SocketClientService } from '@residentialreporter/services/socket-client/socket-client.service';

interface Place {
    value: number;
    coordinates: any;
    viewValue: string;
}

@Component({
    selector: 'app-leaflet-map-select-place',
    templateUrl: './leaflet-map-select-place.component.html',
    styleUrls: ['./leaflet-map-select-place.component.scss'],
})
export class LeafletMapSelectPlaceComponent implements OnInit {
    @Input() center: typeof latLng;
    @Input() zoom: number;
    @Input() placeType: string;
    @Output() itemSelected = new EventEmitter<Place>();
    @Output() itemUnselected = new EventEmitter<Place>();

    form: FormGroup = new FormGroup({
        address: new FormControl()
    });
    places: Place[];
    multiple: boolean;
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
    val = ''; // value of the component

    constructor(
        private fb: FormBuilder,
        private socket: SocketClientService
    ) {
        this.multiple = false;
        this.form = this.fb.group({
            address: [''],
        });
    }

    ngOnInit() {
        this.socket.subscribe('isomer.ors.ors').subscribe(msg => this.processGeocoding(msg));
    }


    processGeocoding(message) {
        console.log('[MAP_SELECT] message:', message);
        /*
        properties:
            accuracy: "point"
            confidence: 0.8
            continent: "Europe"
            continent_gid: "whosonfirst:continent:102191581"
            country: "Germany"
            country_a: "DEU"
            country_gid: "whosonfirst:country:85633111"
            county: "Leipzig "
            county_a: "LS"
            county_gid: "whosonfirst:county:102064225"
            distance: 0.038
            gid: "openstreetmap:address:node/312164366"
            housenumber: "21"
            id: "node/312164366"
            label: "Salomonstraße 21, Leipzig, Germany"
            layer: "address"
            locality: "Leipzig"
            locality_gid: "whosonfirst:locality:101748685"
            name: "Salomonstraße 21"
            postalcode: "04103"
            region: "Sachsen"
            region_a: "SN"
            region_gid: "whosonfirst:region:85682523"
            source: "openstreetmap"
            source_id: "node/312164366"
            street: "Salomonstraße"
         */
        this.places = [];

        let index = 0;

        for (const place of message.data.features) {
            console.log('[MAP-SELECT] Place:', place);
            const placeData = place.properties[this.placeType];

            this.places.push({
                    value: index,
                    coordinates: place.geometry.coordinates,
                    viewValue: placeData
                }
            );
            index++;
        }
        if (message.data.features.length === 1) {
            const place = message.data.features[0];
            const label = place.properties[this.placeType];
            this.form.get('address').setValue(label);
            this.itemSelected.emit(<Place>{
                value: 0,
                coordinates: place.geometry.coordinates,
                viewValue: label
            });
            this.multiple = false;
        } else {
            this.multiple = true;
        }

    }

    requestOrsLookup(data) {
        const request = {
            component: 'isomer.ors.ors',
            action: 'geo_lookup',
            data: data
        };

        this.socket.sendMessage(request);
    }

    requestOrsLookupReverse(data) {
        const request = {
            component: 'isomer.ors.ors',
            action: 'geo_lookup_reverse',
            data: data
        };

        this.socket.sendMessage(request);
    }

    onClick(event) {
        console.log('[MAP-SELECTOR] Clicked at ', event);
        const clickedMarker = marker(event.latlng, {
            icon: icon({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: 'assets/marker-icon.png',
                shadowUrl: 'assets/marker-shadow.png'
            })
        });
        this.layers = [clickedMarker];
        this.center = event.latlng;
        this.requestOrsLookupReverse(event.latlng);
    }

    onSubmit() {
        const data = this.form.get('address').value;
        console.log('[MAP-SELECTOR] Querying address:', data);
        this.requestOrsLookup(data);
    }

    selectPlace(event) {
        console.log('[MAP-SELECTOR] Selected event:', event);
        const place = this.places.filter(obj => {
            return obj.value === event.source.value;
        })[0];
        console.log('[MAP-SELECTOR] Place:', place);
        this.itemSelected.emit(place);
    }

    onMapReady(event) {
        console.log('[MAP-SELECTOR] Ready:', event);
    }

}

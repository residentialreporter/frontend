(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/frontend/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "0J3I":
/*!*********************************************************************!*\
  !*** ./src/app/components/objecteditor/objecteditor.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2JqZWN0ZWRpdG9yL29iamVjdGVkaXRvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "1IM4":
/*!*********************************!*\
  !*** ./src/app/core/in.pipe.ts ***!
  \*********************************/
/*! exports provided: InPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPipe", function() { return InPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let InPipe = class InPipe {
    transform(value, ...array) {
        return array.indexOf(value) !== -1;
    }
};
InPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'in'
    })
], InPipe);



/***/ }),

/***/ "1nYa":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/leaflet-map-locations/leaflet-map-locations.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-leaflet-map-locations\"\n     [style.height]=\"fullscreen ? '100vh' : '25vh'\"\n     leaflet\n     (leafletClick)=\"onClick($event)\"\n     [(leafletCenter)]=\"center\"\n     [leafletOptions]=\"options\"\n     [leafletLayersControl]=\"layersControl\"\n     [leafletLayers]=\"layers\"\n     [leafletMarkerCluster]=\"markerClusterData\"\n     [leafletMarkerClusterOptions]=\"markerClusterOptions\">\n</div>\n");

/***/ }),

/***/ "50jv":
/*!*************************************!*\
  !*** ./src/app/core/any-in.pipe.ts ***!
  \*************************************/
/*! exports provided: AnyInPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnyInPipe", function() { return AnyInPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AnyInPipe = class AnyInPipe {
    transform(value, ...array) {
        for (const item in value) {
            if (array.indexOf(item) !== -1) {
                return true;
            }
        }
        return false;
    }
};
AnyInPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'anyIn'
    })
], AnyInPipe);



/***/ }),

/***/ "78/a":
/*!***************************************!*\
  !*** ./src/app/core/paginatorI18n.ts ***!
  \***************************************/
/*! exports provided: PaginatorI18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorI18n", function() { return PaginatorI18n; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");

class PaginatorI18n {
    constructor(translate) {
        this.translate = translate;
    }
    getPaginatorIntl() {
        const paginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]();
        paginatorIntl.itemsPerPageLabel = this.translate.instant('ITEMS_PER_PAGE_LABEL');
        paginatorIntl.nextPageLabel = this.translate.instant('NEXT_PAGE_LABEL');
        paginatorIntl.previousPageLabel = this.translate.instant('PREVIOUS_PAGE_LABEL');
        paginatorIntl.firstPageLabel = this.translate.instant('FIRST_PAGE_LABEL');
        paginatorIntl.lastPageLabel = this.translate.instant('LAST_PAGE_LABEL');
        paginatorIntl.getRangeLabel = this.getRangeLabel.bind(this);
        return paginatorIntl;
    }
    getRangeLabel(page, pageSize, length) {
        if (length === 0 || pageSize === 0) {
            return this.translate.instant('RANGE_PAGE_LABEL_1', { length });
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return this.translate.instant('RANGE_PAGE_LABEL_2', { startIndex: startIndex + 1, endIndex, length });
    }
}


/***/ }),

/***/ "9BPn":
/*!************************************!*\
  !*** ./src/app/state/app.state.ts ***!
  \************************************/
/*! exports provided: appReducer, appMetaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appMetaReducers", function() { return appMetaReducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngrx-store-freeze */ "PXG5");
/* harmony import */ var _region_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region.state */ "jo+m");
/* harmony import */ var _residentialreporter_state_location_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @residentialreporter/state/location.state */ "FBCC");





const appReducer = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
    location: _residentialreporter_state_location_state__WEBPACK_IMPORTED_MODULE_4__["LocationReducer"],
    region: _region_state__WEBPACK_IMPORTED_MODULE_3__["RegionReducer"]
};
const appMetaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__["storeFreeze"]] : [];


/***/ }),

/***/ "9RCi":
/*!***************************************!*\
  !*** ./src/app/state/state.module.ts ***!
  \***************************************/
/*! exports provided: StateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModule", function() { return StateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @briebug/ngrx-auto-entity */ "ak7I");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.state */ "9BPn");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/utils */ "WScw");
/* harmony import */ var _residentialreporter_state_app_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @residentialreporter/state/app.effects */ "MxHT");
/* harmony import */ var _residentialreporter_state_router_router_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @residentialreporter/state/router/router.effects */ "MxwL");
var StateModule_1;













let StateModule = StateModule_1 = class StateModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('StateModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot() {
        return {
            ngModule: StateModule_1,
            providers: [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["RouterStateSerializer"], useClass: _shared_utils__WEBPACK_IMPORTED_MODULE_10__["CustomRouterStateSerializer"] }]
        };
    }
};
StateModule.ctorParameters = () => [
    { type: StateModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"] }] }
];
StateModule = StateModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_app_state__WEBPACK_IMPORTED_MODULE_9__["appReducer"], {
                metaReducers: _app_state__WEBPACK_IMPORTED_MODULE_9__["appMetaReducers"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_residentialreporter_state_app_effects__WEBPACK_IMPORTED_MODULE_11__["AppEffects"], _residentialreporter_state_router_router_effects__WEBPACK_IMPORTED_MODULE_12__["RouterEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({ logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' }),
            _briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_3__["NgrxAutoEntityModule"].forRoot()
        ]
    })
], StateModule);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: 'ws://localhost:8055/websocket'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BZg7":
/*!***************************************************************!*\
  !*** ./src/app/services/socket-client/socket-client-state.ts ***!
  \***************************************************************/
/*! exports provided: SocketClientState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketClientState", function() { return SocketClientState; });
var SocketClientState;
(function (SocketClientState) {
    SocketClientState[SocketClientState["ATTEMPTING"] = 0] = "ATTEMPTING";
    SocketClientState[SocketClientState["CONNECTED"] = 1] = "CONNECTED";
    SocketClientState[SocketClientState["OFFLINE"] = 2] = "OFFLINE";
})(SocketClientState || (SocketClientState = {}));


/***/ }),

/***/ "CFL1":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socket-client/socket-client.service */ "q82B");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _residentialreporter_services_socket_client_socket_client_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @residentialreporter/services/socket-client/socket-client-state */ "BZg7");







let UserService = class UserService {
    constructor(Socket, router, _snackBar) {
        this.Socket = Socket;
        this.router = router;
        this._snackBar = _snackBar;
        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isOffline = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.authenticated = false;
        this.roles = [];
        console.log('[USER] Constructing');
        this.socket = Socket;
        this.selectLanguage("de");
        this.socket.subscribe('auth').subscribe(msg => {
            console.log('[USER] Service got some message:', msg);
            if (msg.action === 'login') {
                console.log('[USER] Logged in');
                this.authenticated = true;
                this.roles = msg.data.roles;
                this.isAuthenticated.next(true);
            }
            else if (msg.action === 'fail') {
                console.log('[USER] Could not log in');
                const snackBarRef = this._snackBar.open('Login fehlgeschlagen. Bitte prüfe Deine Zugangsdaten.', 'Passwort zurücksetzen', {
                    duration: 5000,
                    horizontalPosition: 'start',
                    verticalPosition: 'bottom'
                });
                snackBarRef.onAction().subscribe(() => {
                    console.log('Password reset is being requested');
                    this.router.navigate(['/password-reset']);
                });
            }
        });
        this.socket.state.subscribe(state => {
            this.isOffline.next(state === _residentialreporter_services_socket_client_socket_client_state__WEBPACK_IMPORTED_MODULE_6__["SocketClientState"].OFFLINE);
        });
    }
    selectLanguage(language) {
        const request = {
            component: "isomer.ui.clientmanager.languages",
            action: "selectlanguage",
            data: "de"
        };
        this.socket.sendMessage(request);
    }
    checkAuthenticated() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.authenticated;
        });
    }
    login(username, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const authpacket = {
                'component': 'auth', 'action': 'login',
                'data': {
                    'username': username,
                    'password': password
                }
            };
            this.socket.sendMessage(authpacket);
            this.isAuthenticated.subscribe(status => {
                if (status) {
                    console.log('Logged in, switching to home');
                    this.router.navigate(['home']);
                }
                else {
                    console.log('Log in status update negative.');
                }
            });
        });
    }
    logout(redirect) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.socket.sendMessage({
                    'component': 'auth',
                    'action': 'logout',
                });
                this.roles = [];
                this.isAuthenticated.next(false);
                yield this.router.navigate([redirect]);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    isUser() {
        return this.roles.indexOf('user') !== -1;
    }
    isModerator() {
        return this.roles.indexOf('moderator') !== -1;
    }
    isAdmin() {
        return this.roles.indexOf('admin') !== -1;
    }
    reset_password(address) {
        this._snackBar.open('Baustelle - dieser Vorgang wird noch entwickelt..', '', {
            duration: 5000,
            horizontalPosition: 'start',
            verticalPosition: 'bottom'
        });
    }
    register(address, username, password, passwordConfirm) {
        this._snackBar.open('Baustelle - dieser Vorgang wird noch entwickelt..', '', {
            duration: 5000,
            horizontalPosition: 'start',
            verticalPosition: 'bottom'
        });
    }
};
UserService.ctorParameters = () => [
    { type: _socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_3__["SocketClientService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "FBCC":
/*!*****************************************!*\
  !*** ./src/app/state/location.state.ts ***!
  \*****************************************/
/*! exports provided: initialState, LocationFacadeBase, LocationReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFacadeBase", function() { return LocationFacadeBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationReducer", function() { return LocationReducer; });
/* harmony import */ var _briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @briebug/ngrx-auto-entity */ "ak7I");
/* harmony import */ var _residentialreporter_models_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @residentialreporter/models/location */ "cjx8");


const { initialState, facade: LocationFacadeBase } = Object(_briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_0__["buildState"])(_residentialreporter_models_location__WEBPACK_IMPORTED_MODULE_1__["Location"]);
// A "stub" reducer is required to support AOT
function LocationReducer(state = initialState) {
    return state;
}


/***/ }),

/***/ "G14k":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/leaflet-map-select-place/leaflet-map-select-place.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LeafletMapSelectPlaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletMapSelectPlaceComponent", function() { return LeafletMapSelectPlaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leaflet_map_select_place_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leaflet-map-select-place.component.html */ "y3bW");
/* harmony import */ var _leaflet_map_select_place_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet-map-select-place.component.scss */ "PDVB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _residentialreporter_services_socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @residentialreporter/services/socket-client/socket-client.service */ "q82B");







let LeafletMapSelectPlaceComponent = class LeafletMapSelectPlaceComponent {
    constructor(fb, socket) {
        this.fb = fb;
        this.socket = socket;
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.itemUnselected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        this.options = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            ],
            zoom: 7,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"])(51.1, 10.5)
        };
        this.layersControl = {
            baseLayers: {
                'Open Street Map': Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
                'Open Cycle Map': Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            },
            overlays: {}
        };
        this.layers = [];
        this.val = ''; // value of the component
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
            });
            index++;
        }
        if (message.data.features.length === 1) {
            const place = message.data.features[0];
            const label = place.properties[this.placeType];
            this.form.get('address').setValue(label);
            this.itemSelected.emit({
                value: 0,
                coordinates: place.geometry.coordinates,
                viewValue: label
            });
            this.multiple = false;
        }
        else {
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
        const clickedMarker = Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"])(event.latlng, {
            icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"])({
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
};
LeafletMapSelectPlaceComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _residentialreporter_services_socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_6__["SocketClientService"] }
];
LeafletMapSelectPlaceComponent.propDecorators = {
    center: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    zoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    placeType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    itemSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    itemUnselected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
LeafletMapSelectPlaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leaflet-map-select-place',
        template: _raw_loader_leaflet_map_select_place_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leaflet_map_select_place_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeafletMapSelectPlaceComponent);



/***/ }),

/***/ "MV75":
/*!********************************************!*\
  !*** ./src/app/services/entity.service.ts ***!
  \********************************************/
/*! exports provided: EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _residentialreporter_services_socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @residentialreporter/services/socket-client/socket-client.service */ "q82B");




let EntityService = class EntityService {
    constructor(socket) {
        this.socket = socket;
    }
    load(entityInfo, uuid) {
        console.log('[ENTITYSERVICE] Getting:', entityInfo, uuid);
        return this.socket.get(entityInfo.modelName, uuid);
    }
    loadAll(entityInfo) {
        return this.socket.search(entityInfo.modelName, '*');
    }
    create(entityInfo, entity) {
        entity.uuid = 'create';
        return this.socket.post(entityInfo.modelName, entity);
    }
    update(entityInfo, entity) {
        return this.socket.put(entityInfo.modelName, entity);
    }
    delete(entityInfo, entity) {
        return this.socket.delete(entityInfo.modelName, entity.uuid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => entity));
    }
};
EntityService.ctorParameters = () => [
    { type: _residentialreporter_services_socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_3__["SocketClientService"] }
];
EntityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EntityService);



/***/ }),

/***/ "MxHT":
/*!**************************************!*\
  !*** ./src/app/state/app.effects.ts ***!
  \**************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");



let AppEffects = class AppEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        console.log(actions$);
    }
};
AppEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }
];
AppEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppEffects);



/***/ }),

/***/ "MxwL":
/*!************************************************!*\
  !*** ./src/app/state/router/router.effects.ts ***!
  \************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _router_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router.actions */ "jSXB");







let RouterEffects = class RouterEffects {
    constructor(actions$, router, location) {
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_6__["RouterActionType"].go), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(action => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(({ path, query: queryParams, extras }) => this.router.navigate(path, Object.assign({ queryParams }, extras))));
        this.navigateBack$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_6__["RouterActionType"].back), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.location.back()));
        this.navigateForward$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_6__["RouterActionType"].forward), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.location.forward()));
    }
};
RouterEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
        dispatch: false
    })
], RouterEffects.prototype, "navigate$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
        dispatch: false
    })
], RouterEffects.prototype, "navigateBack$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
        dispatch: false
    })
], RouterEffects.prototype, "navigateForward$", void 0);
RouterEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], RouterEffects);



/***/ }),

/***/ "PDVB":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/leaflet-map-select-place/leaflet-map-select-place.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-leaflet-map-select-place {\n  height: 25vh;\n  z-index: 1;\n  border-radius: 4px;\n}\n\nmat-form-field {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWFmbGV0LW1hcC1zZWxlY3QtcGxhY2UvbGVhZmxldC1tYXAtc2VsZWN0LXBsYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdBO0VBQ0UsY0FBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sZWFmbGV0LW1hcC1zZWxlY3QtcGxhY2UvbGVhZmxldC1tYXAtc2VsZWN0LXBsYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1sZWFmbGV0LW1hcC1zZWxlY3QtcGxhY2Uge1xuICBoZWlnaHQ6IDI1dmg7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user/user.service */ "CFL1");
/* harmony import */ var _services_schemata_schemata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/schemata/schemata.service */ "TOIp");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, userService, schemataService, translate) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.userService = userService;
        this.schemataService = schemataService;
        this.translate = translate;
        this.title = 'ResidentialReporter';
        this.isAuthenticated = false;
        this.isOffline = false;
        this.initializeApp();
        this.userService.isAuthenticated.subscribe((isAuthenticated) => this.isAuthenticated = isAuthenticated);
        this.userService.isOffline.subscribe((isOffline) => this.isOffline = isOffline);
    }
    initializeApp() {
        // TODO: Grab language from browser and check if it is supported, else
        //  fallback to 'de'?
        this.translate.setDefaultLang('de');
        this.translate.get('title').subscribe(value => {
            console.log('i18n:', value);
            this.title = value;
        });
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isAuthenticated = yield this.userService.checkAuthenticated();
        });
    }
    logout() {
        this.userService.logout('/');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _services_schemata_schemata_service__WEBPACK_IMPORTED_MODULE_8__["SchemataService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "T4jx":
/*!*************************************************************************************!*\
  !*** ./src/app/components/leaflet-map-locations/leaflet-map-locations.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LeafletMapLocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletMapLocationsComponent", function() { return LeafletMapLocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leaflet_map_locations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leaflet-map-locations.component.html */ "1nYa");
/* harmony import */ var _leaflet_map_locations_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet-map-locations.component.scss */ "t2N4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet.markercluster */ "JXP8");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_5__);







let LeafletMapLocationsComponent = class LeafletMapLocationsComponent {
    constructor() {
        this.options = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            ],
            zoom: 7,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"])(51.1, 10.5)
        };
        this.layersControl = {
            baseLayers: {
                'Open Street Map': Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
                'Open Cycle Map': Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            },
            overlays: {}
        };
        this.layers = [];
        this.markerClusterData = [];
    }
    ngOnInit() {
    }
    ngOnChanges(simpleChanges) {
        if (simpleChanges.places && simpleChanges.places.currentValue) {
            this.markerClusterData = this.generateData();
        }
    }
    markerClusterReady(group) {
        this.markerClusterGroup = group;
    }
    generateData() {
        const data = [];
        console.log('[MAP-PLACES] Places:', this.places);
        for (const item of this.places) {
            console.log('ITEM:', item);
            const icon = leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"]({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconRetinaUrl: 'assets/marker-icon-2x.png',
                iconUrl: 'assets/marker-icon.png',
                shadowUrl: 'assets/marker-shadow.png',
            });
            if (typeof item.coordinate !== 'undefined') {
                data.push(leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"]([item.coordinate.lat, item.coordinate.lon], { icon }));
            }
            else {
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
};
LeafletMapLocationsComponent.ctorParameters = () => [];
LeafletMapLocationsComponent.propDecorators = {
    center: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    zoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    places: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
LeafletMapLocationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leaflet-map-locations',
        template: _raw_loader_leaflet_map_locations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leaflet_map_locations_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LeafletMapLocationsComponent);



/***/ }),

/***/ "TOIp":
/*!*******************************************************!*\
  !*** ./src/app/services/schemata/schemata.service.ts ***!
  \*******************************************************/
/*! exports provided: SchemataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemataService", function() { return SchemataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket-client/socket-client.service */ "q82B");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "CFL1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let SchemataService = class SchemataService {
    constructor(Socket, User) {
        this.Socket = Socket;
        this.User = User;
        console.log('[SCHEMATA] Constructing');
        this.socket = Socket;
        this.user = User;
        this.schemataUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.socket.subscribe('isomer.events.schemamanager').subscribe(message => {
            console.log('[SCHEMATA] Received schemata:', message);
            this.schemata = message.data;
            this.schemataUpdate.next(this.schemata);
        });
        this.user.isAuthenticated.subscribe(authenticated => {
            if (authenticated) {
                const request = {
                    component: 'isomer.events.schemamanager',
                    action: 'all'
                };
                this.socket.sendMessage(request);
            }
        });
    }
};
SchemataService.ctorParameters = () => [
    { type: _socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_2__["SocketClientService"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
SchemataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SchemataService);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n    <mat-toolbar color=\"primary\">\n        <mat-toolbar-row>\n            <span fxShow.gt-sm=\"true\" fxShow.lt-md=\"false\">\n                <button mat-button routerLink=\"/\">\n                    <!--<mat-icon>home</mat-icon> -->\n                    <mat-icon>\n                        <img src=\"assets/icon/building_optimized.svg\">\n                    </mat-icon>\n                    {{title}}</button>\n\n                <button mat-button routerLink=\"/locations/map\">{{ 'Map' | translate }}</button>\n                <button mat-button routerLink=\"/regions\">{{ 'Regions' | translate }}</button>\n                <button mat-button routerLink=\"/locations\">{{ 'Reports' | translate }}</button>\n                <!-- <button mat-button routerLink=\"/editor\">Editor</button> -->\n\n                <!-- This fills the remaining space of the current row -->\n                <span class=\"fill-remaining-space\"></span>\n\n\n                <button [matMenuTriggerFor]=\"usermenubar\" [disabled]=\"isOffline\" mat-button>\n                    <mat-icon [hidden]=\"!isAuthenticated || isOffline\">person</mat-icon>\n                    <mat-icon [hidden]=\"isAuthenticated || isOffline\">person_outline</mat-icon>\n                    <mat-icon [hidden]=\"!isOffline\" matTooltip=\"Cannot contact server!\">person_off</mat-icon>\n                </button>\n                <mat-menu #usermenubar=\"matMenu\">\n                    <button [hidden]=\"isAuthenticated\" mat-button routerLink=\"/register\">\n                        <mat-icon>person_add</mat-icon>\n                        {{ 'Register' | translate }}\n                    </button>\n                    <button [hidden]=\"isAuthenticated\" mat-button routerLink=\"/login\">\n                        <mat-icon>person</mat-icon>\n                        {{ 'Log in' | translate }}\n                    </button>\n                    <button (click)=\"logout()\" [hidden]=\"!isAuthenticated\" mat-button>\n                        <mat-icon>person_outline</mat-icon>\n                        {{ 'Log out' | translate }}\n                    </button>\n                    <button [hidden]=\"!isAuthenticated\" mat-button routerLink=\"/profile\">\n                        <mat-icon>account_box</mat-icon>\n                        {{ 'Edit profile' | translate }}\n                    </button>\n                </mat-menu>\n            </span>\n\n            <button [mat-menu-trigger-for]=\"menu\"\n                    fxHide=\"false\"\n                    fxHide.gt-sm\n                    mat-button>\n                <mat-icon>menu</mat-icon>\n            </button>\n        </mat-toolbar-row>\n\n\n    </mat-toolbar>\n    <mat-menu #menu=\"\" x-position=\"before\">\n        <button mat-menu-item routerLink=\"/\">\n            <mat-icon>home</mat-icon>\n            {{title}}</button>\n        <button mat-menu-item routerLink=\"/map\">\n            <mat-icon>map</mat-icon>\n            {{ 'Map' | translate }}\n        </button>\n        <button mat-menu-item routerLink=\"/regions\">\n            <mat-icon>terrain</mat-icon>\n            {{ 'Regions' | translate }}\n        </button>\n        <button mat-menu-item routerLink=\"/locations\">\n            <mat-icon>feedback</mat-icon>\n            {{ 'Reports' | translate }}\n        </button>\n        <!--<button mat-menu-item>Help</button>-->\n        <button [matMenuTriggerFor]=\"usermenu\" [hidden]=\"isOffline\" mat-menu-item>\n            <mat-icon [hidden]=\"isAuthenticated\">person_outline</mat-icon>\n            <mat-icon [hidden]=\"!isAuthenticated\">person</mat-icon>\n            {{ 'User actions' | translate }}\n        </button>\n        <button [hidden]=\"!isOffline\" mat-menu-item [disabled]=\"true\">\n            <mat-icon>person_off</mat-icon>\n            {{ 'No connection!' | translate }}\n        </button>\n        <mat-menu [hidden]=\"isOffline\" #usermenu=\"matMenu\">\n            <button [hidden]=\"isAuthenticated\" mat-button routerLink=\"/register\">\n                <mat-icon>person_add</mat-icon>\n                {{ 'Register' | translate }}\n            </button>\n            <button [hidden]=\"isAuthenticated\" mat-button routerLink=\"/login\">\n                <mat-icon>person</mat-icon>\n                {{ 'Log in' | translate }}\n            </button>\n            <button (click)=\"logout()\" [hidden]=\"!isAuthenticated\" mat-button>\n                <mat-icon>person_outline</mat-icon>\n                {{ 'Log out' | translate }}\n            </button>\n            <button [hidden]=\"!isAuthenticated\" mat-button routerLink=\"/profile\">\n                <mat-icon>account_box</mat-icon>\n                {{ 'Edit profile' | translate }}\n            </button>\n        </mat-menu>\n    </mat-menu>\n\n\n    <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "WScw":
/*!***************************************!*\
  !*** ./src/app/state/shared/utils.ts ***!
  \***************************************/
/*! exports provided: CustomRouterStateSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouterStateSerializer", function() { return CustomRouterStateSerializer; });
class CustomRouterStateSerializer {
    serialize(routerState) {
        const { url } = routerState;
        const queryParams = routerState.root.queryParams;
        return { url, queryParams };
    }
}


/***/ }),

/***/ "YDHl":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/objecteditor/objecteditor.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-title>Edit object</mat-card-title>\n    <mat-card-content>\n        <json-schema-form\n                (onSubmit)=\"store($event)\"\n                [schema]=\"editor_schema\"\n                framework=\"material-design\">\n\n        </json-schema-form>\n    </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, MyMissingTranslationHandler, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMissingTranslationHandler", function() { return MyMissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ajsf_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ajsf/material */ "fCQM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _residentialreporter_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @residentialreporter/material.module */ "vvyD");
/* harmony import */ var _briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @briebug/ngrx-auto-entity */ "ak7I");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _services_socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/socket-client/socket-client.service */ "q82B");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user/user.service */ "CFL1");
/* harmony import */ var _residentialreporter_services_entity_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @residentialreporter/services/entity.service */ "MV75");
/* harmony import */ var _residentialreporter_models_location__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @residentialreporter/models/location */ "cjx8");
/* harmony import */ var _residentialreporter_models_region__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @residentialreporter/models/region */ "uo/W");
/* harmony import */ var _residentialreporter_state_state_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @residentialreporter/state/state.module */ "9RCi");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _residentialreporter_core_core_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @residentialreporter/core/core.module */ "pKmL");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");




























function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


class MyMissingTranslationHandler {
    handle(params) {
        console.log('[TRANSLATE] Params:', params);
        return '[[' + params.key + ']]';
    }
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"].forRoot({
                missingTranslationHandler: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["MissingTranslationHandler"],
                    useClass: MyMissingTranslationHandler
                },
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]]
                }
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _residentialreporter_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
            _ajsf_material__WEBPACK_IMPORTED_MODULE_10__["MaterialDesignFrameworkModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_26__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument() : [],
            _residentialreporter_state_state_module__WEBPACK_IMPORTED_MODULE_25__["StateModule"].forRoot(),
            _briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_13__["NgrxAutoEntityModule"].forRoot(),
            _residentialreporter_core_core_module__WEBPACK_IMPORTED_MODULE_27__["CoreModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
        ],
        exports: [],
        providers: [
            _services_socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_20__["SocketClientService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            { provide: _residentialreporter_models_location__WEBPACK_IMPORTED_MODULE_23__["Location"], useClass: _residentialreporter_services_entity_service__WEBPACK_IMPORTED_MODULE_22__["EntityService"] },
            { provide: _residentialreporter_models_region__WEBPACK_IMPORTED_MODULE_24__["Region"], useClass: _residentialreporter_services_entity_service__WEBPACK_IMPORTED_MODULE_22__["EntityService"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "azhA":
/*!*******************************************************************!*\
  !*** ./src/app/components/objecteditor/objecteditor.component.ts ***!
  \*******************************************************************/
/*! exports provided: ObjectEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectEditorComponent", function() { return ObjectEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_objecteditor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./objecteditor.component.html */ "YDHl");
/* harmony import */ var _objecteditor_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objecteditor.component.scss */ "0J3I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user/user.service */ "CFL1");





let ObjectEditorComponent = class ObjectEditorComponent {
    constructor(user_service) {
        this.user_service = user_service;
        console.log('HELLO OE-VIEWER!');
        this.user = user_service;
        this.editor_schema = {
            'schema': {
                'id': '#region',
                'type': 'object',
                'name': 'region',
                'properties': {
                    'name': {
                        'type': 'string',
                        'description': 'Name of region'
                    },
                    'owner': {
                        'pattern': '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$',
                        'type': 'string',
                        'title': 'Unique Owner ID',
                        'description': 'Select an object'
                    },
                    'color': {
                        'type': 'string',
                        'format': 'colorpicker'
                    },
                    'uuid': {
                        'pattern': '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$',
                        'type': 'string',
                        'title': 'Unique region ID',
                        'description': 'Select an object',
                        'x-schema-form': {
                            'condition': 'false'
                        }
                    },
                    'title': {
                        'type': 'string'
                    },
                    'description': {
                        'type': 'string'
                    },
                    'zoom': {
                        'type': 'integer',
                        'max': 16,
                        'min': 5
                    },
                    'coordinate': {
                        'type': 'object',
                        'title': 'Coordinate',
                        'description': 'A coordinate',
                        'additionalProperties': false,
                        'properties': {
                            'lat': {
                                'type': 'string',
                                'pattern': '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?)$',
                                'title': 'Latitude',
                                'description': 'From 90 Degrees North (+) to South (-)'
                            },
                            'lon': {
                                'type': 'string',
                                'pattern': '^[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$',
                                'title': 'Longitude',
                                'description': 'From 180 Degrees East (+) to West (-)'
                            }
                        }
                    },
                    'moderators': {
                        'type': 'array',
                        'items': {
                            'pattern': '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$',
                            'type': 'string',
                            'title': 'user',
                            'description': 'Select an object'
                        }
                    },
                    'active': {
                        'type': 'boolean'
                    },
                    'hide': {
                        'type': 'boolean'
                    },
                    'hide_message': {
                        'type': 'string'
                    },
                    'slug': {
                        'type': 'string'
                    },
                    'slug_aliases': {
                        'type': 'string'
                    },
                    'created': {
                        'type': 'string',
                        'format': 'datetime'
                    },
                    'updated': {
                        'type': 'string',
                        'format': 'datetime'
                    }
                },
                'additionalProperties': false
            }
        };
    }
    ngOnInit() {
    }
    store(event) {
        console.log('[OBJECTEDITOR] Storing:', event);
    }
};
ObjectEditorComponent.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],] }] }
];
ObjectEditorComponent.propDecorators = {
    uuid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ObjectEditorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-object-editor',
        template: _raw_loader_objecteditor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_objecteditor_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ObjectEditorComponent);



/***/ }),

/***/ "cjx8":
/*!************************************!*\
  !*** ./src/app/models/location.ts ***!
  \************************************/
/*! exports provided: Location, Coordinate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinate", function() { return Coordinate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @briebug/ngrx-auto-entity */ "ak7I");


let Location = class Location {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_1__["Key"]
], Location.prototype, "uuid", void 0);
Location = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_1__["Entity"])({ modelName: 'location', uriName: 'locations' })
], Location);

/**
 * A coordinate
 */
class Coordinate {
}


/***/ }),

/***/ "jSXB":
/*!************************************************!*\
  !*** ./src/app/state/router/router.actions.ts ***!
  \************************************************/
/*! exports provided: RouterActionType, Back, Forward, Go */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterActionType", function() { return RouterActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return Forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return Go; });
var RouterActionType;
(function (RouterActionType) {
    RouterActionType["back"] = "[Router] Back";
    RouterActionType["forward"] = "[Router] Forward";
    RouterActionType["go"] = "[Router] Go";
})(RouterActionType || (RouterActionType = {}));
class Back {
    constructor() {
        this.type = RouterActionType.back;
    }
}
class Forward {
    constructor() {
        this.type = RouterActionType.forward;
    }
}
class Go {
    constructor(payload) {
        this.payload = payload;
        this.type = RouterActionType.go;
    }
}


/***/ }),

/***/ "jo+m":
/*!***************************************!*\
  !*** ./src/app/state/region.state.ts ***!
  \***************************************/
/*! exports provided: initialState, RegionFacadeBase, RegionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionFacadeBase", function() { return RegionFacadeBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionReducer", function() { return RegionReducer; });
/* harmony import */ var _briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @briebug/ngrx-auto-entity */ "ak7I");
/* harmony import */ var _residentialreporter_models_region__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @residentialreporter/models/region */ "uo/W");


const { initialState, facade: RegionFacadeBase } = Object(_briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_0__["buildState"])(_residentialreporter_models_region__WEBPACK_IMPORTED_MODULE_1__["Region"]);
// A "stub" reducer is required to support AOT
function RegionReducer(state = initialState) {
    return state;
}


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _residentialreporter_components_objecteditor_objecteditor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @residentialreporter/components/objecteditor/objecteditor.component */ "azhA");
/* harmony import */ var _residentialreporter_components_leaflet_map_select_place_leaflet_map_select_place_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @residentialreporter/components/leaflet-map-select-place/leaflet-map-select-place.component */ "G14k");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");
/* harmony import */ var _residentialreporter_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @residentialreporter/material.module */ "vvyD");
/* harmony import */ var _residentialreporter_components_leaflet_map_locations_leaflet_map_locations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @residentialreporter/components/leaflet-map-locations/leaflet-map-locations.component */ "T4jx");
/* harmony import */ var _asymmetrik_ngx_leaflet_markercluster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet-markercluster */ "iDpu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _in_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./in.pipe */ "1IM4");
/* harmony import */ var _any_in_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./any-in.pipe */ "50jv");












let CoreModule = class CoreModule {
};
CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _residentialreporter_components_objecteditor_objecteditor_component__WEBPACK_IMPORTED_MODULE_3__["ObjectEditorComponent"],
            _residentialreporter_components_leaflet_map_select_place_leaflet_map_select_place_component__WEBPACK_IMPORTED_MODULE_4__["LeafletMapSelectPlaceComponent"],
            _residentialreporter_components_leaflet_map_locations_leaflet_map_locations_component__WEBPACK_IMPORTED_MODULE_7__["LeafletMapLocationsComponent"],
            _in_pipe__WEBPACK_IMPORTED_MODULE_10__["InPipe"],
            _any_in_pipe__WEBPACK_IMPORTED_MODULE_11__["AnyInPipe"],
        ],
        exports: [
            _residentialreporter_components_objecteditor_objecteditor_component__WEBPACK_IMPORTED_MODULE_3__["ObjectEditorComponent"],
            _residentialreporter_components_leaflet_map_select_place_leaflet_map_select_place_component__WEBPACK_IMPORTED_MODULE_4__["LeafletMapSelectPlaceComponent"],
            _residentialreporter_components_leaflet_map_locations_leaflet_map_locations_component__WEBPACK_IMPORTED_MODULE_7__["LeafletMapLocationsComponent"],
            _any_in_pipe__WEBPACK_IMPORTED_MODULE_11__["AnyInPipe"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__["LeafletModule"],
            _asymmetrik_ngx_leaflet_markercluster__WEBPACK_IMPORTED_MODULE_8__["LeafletMarkerClusterModule"],
            _residentialreporter_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        ]
    })
], CoreModule);



/***/ }),

/***/ "q82B":
/*!*****************************************************************!*\
  !*** ./src/app/services/socket-client/socket-client.service.ts ***!
  \*****************************************************************/
/*! exports provided: SocketMessage, SocketClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketMessage", function() { return SocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketClientService", function() { return SocketClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/webSocket */ "3uOa");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _socket_client_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socket-client-state */ "BZg7");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");







class SocketMessage {
}
let SocketClientService = class SocketClientService {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.connected = false;
        this.hostname = window.location.hostname;
        this.port = window.location.port;
        this.requestId = 0;
        this.observers = {};
        this.requests = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL;
        console.log('[SOCKET] Websocket url', this.url);
        this.socket = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__["webSocket"])(this.url);
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](_socket_client_state__WEBPACK_IMPORTED_MODULE_4__["SocketClientState"].ATTEMPTING);
        this.socket.asObservable().subscribe(message => {
            console.log('[SOCKET] Data:', message);
            this.connected = true;
            if (Object.keys(this.observers).indexOf(message.component) >= 0) {
                console.log('[SOCKET] Observed component sends something');
                const observer = this.observers[message.component];
                console.log('[SOCKET] Handing over to observer:', observer);
                observer.next(message);
            }
            else if (message.data.hasOwnProperty('req') &&
                this.requests.hasOwnProperty(message.data.req)) {
                console.log('[SOCKET] Request returned');
                if (message.action === 'search') {
                    console.log('[SOCKET] Search results:', message.data.list);
                    this.requests[message.data.req].next(message.data.list);
                }
                else if (message.action === 'delete') {
                    this.requests[message.data.req].next({});
                }
                else if (message.action === 'put') {
                    console.log(message.data.object);
                    this.requests[message.data.req].next(message.data.object);
                }
                else {
                    this.requests[message.data.req].next(message);
                }
            }
            else {
                console.warn('[SOCKET] No handler for message registered:', message);
            }
        }, err => {
            console.error('[SOCKET] Error:', err);
            const snackBarRef = this._snackBar.open('Das Backend mit den Daten kann nicht erreicht werden.', 'Nochmal versuchen (WiP)', {
                duration: 5000,
                horizontalPosition: 'start',
                verticalPosition: 'bottom'
            });
            this.state.next(_socket_client_state__WEBPACK_IMPORTED_MODULE_4__["SocketClientState"].OFFLINE);
        });
    }
    constructSocketUrl() {
        this.hostname = window.location.hostname;
        this.port = window.location.port;
        // TODO: Remove and make configurable
        this.protocol = 'ws';
        this.port = '8057';
        if ((this.protocol === 'wss' && this.port !== '443') || (this.protocol === 'ws' && this.port !== '80')) {
            this.hostname += ':' + this.port;
        }
        this.url = this.protocol + '://' + this.hostname;
        this.url += '/websocket';
    }
    getNextRequestId() {
        this.requestId++;
        return this.requestId;
    }
    operate(action, data) {
        const request = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        const requestId = this.getNextRequestId();
        console.log(action, data, this.requests, requestId);
        this.requests[requestId] = request;
        data.req = requestId;
        const packet = {
            component: 'isomer.events.objectmanager',
            action: action,
            data: data
        };
        this.sendMessage(packet);
        return request.asObservable();
    }
    get(schema, uuid) {
        const data = {
            schema: schema,
            uuid: uuid
        };
        return this.operate('get', data);
    }
    put(schema, thing) {
        const data = {
            schema: schema,
            obj: thing
        };
        return this.operate('put', data);
    }
    post(schema, thing) {
        const data = {
            schema: schema,
            obj: thing
        };
        // TODO: Clearly define CRUD operations in @isomeric/isomer
        //  ui/objectmanager/crud.py
        return this.operate('put', data);
    }
    delete(schema, uuid) {
        const data = {
            schema: schema,
            uuid: uuid
        };
        return this.operate('delete', data);
    }
    search(schema, filter) {
        const data = {
            schema: schema,
            search: filter,
            fields: '*'
        };
        return this.operate('search', data);
    }
    subscribe(component) {
        console.log('Subscribing to:', component);
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.observers[component] = subject;
        return subject;
    }
    sendMessage(message) {
        console.log('Socket sending!', message);
        this.socket.next(message);
    }
    ngOnDestroy() {
        console.log('Destroying socket service');
    }
};
SocketClientService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
SocketClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketClientService);



/***/ }),

/***/ "t2N4":
/*!***************************************************************************************!*\
  !*** ./src/app/components/leaflet-map-locations/leaflet-map-locations.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-leaflet-map-locations {\n  z-index: 1;\n  border-radius: 4px;\n}\n\nmat-form-field {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWFmbGV0LW1hcC1sb2NhdGlvbnMvbGVhZmxldC1tYXAtbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxjQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xlYWZsZXQtbWFwLWxvY2F0aW9ucy9sZWFmbGV0LW1hcC1sb2NhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWxlYWZsZXQtbWFwLWxvY2F0aW9ucyB7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "uo/W":
/*!**********************************!*\
  !*** ./src/app/models/region.ts ***!
  \**********************************/
/*! exports provided: Region, Coordinate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinate", function() { return Coordinate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @briebug/ngrx-auto-entity */ "ak7I");


let Region = class Region {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_1__["Key"]
], Region.prototype, "uuid", void 0);
Region = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_briebug_ngrx_auto_entity__WEBPACK_IMPORTED_MODULE_1__["Entity"])({ modelName: 'region', uriName: 'regions' })
], Region);

/**
 * A coordinate
 */
class Coordinate {
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    // Pages
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | residentialreporter-pages-home-home-module */ "residentialreporter-pages-home-home-module").then(__webpack_require__.bind(null, /*! @residentialreporter/pages/home/home.module */ "99Un")).then(m => m.HomePageModule)
    },
    {
        path: 'map',
        loadChildren: () => Promise.all(/*! import() | residentialreporter-pages-map-map-module */[__webpack_require__.e("common"), __webpack_require__.e("residentialreporter-pages-map-map-module")]).then(__webpack_require__.bind(null, /*! @residentialreporter/pages/map/map.module */ "862v")).then(m => m.MapPageModule),
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | residentialreporter-pages-login-login-module */ "residentialreporter-pages-login-login-module").then(__webpack_require__.bind(null, /*! @residentialreporter/pages/login/login.module */ "F4UR")).then(m => m.LoginPageModule),
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | residentialreporter-pages-registration-registration-module */ "residentialreporter-pages-registration-registration-module").then(__webpack_require__.bind(null, /*! @residentialreporter/pages/registration/registration.module */ "z6fL")).then(m => m.RegistrationPageModule),
    },
    {
        path: 'password-reset',
        loadChildren: () => __webpack_require__.e(/*! import() | residentialreporter-pages-password-reset-password-reset-module */ "residentialreporter-pages-password-reset-password-reset-module").then(__webpack_require__.bind(null, /*! @residentialreporter/pages/password-reset/password-reset.module */ "H5x3")).then(m => m.PasswordResetPageModule),
    },
    // Development and debugging
    {
        path: 'editor',
        loadChildren: () => __webpack_require__.e(/*! import() | residentialreporter-pages-editor-editor-module */ "residentialreporter-pages-editor-editor-module").then(__webpack_require__.bind(null, /*! @residentialreporter/pages/editor/editor.module */ "hUiA")).then(m => m.EditorPageModule),
    },
    // Auto-entity views start here
    {
        path: 'regions',
        loadChildren: () => Promise.all(/*! import() | residentialreporter-regions-regions-module */[__webpack_require__.e("common"), __webpack_require__.e("residentialreporter-regions-regions-module")]).then(__webpack_require__.bind(null, /*! @residentialreporter/+regions/regions.module */ "70jf")).then(m => m.RegionsModule),
    },
    {
        path: 'locations',
        loadChildren: () => __webpack_require__.e(/*! import() | residentialreporter-locations-locations-module */ "residentialreporter-locations-locations-module").then(__webpack_require__.bind(null, /*! @residentialreporter/+locations/locations.module */ "yhuP")).then(m => m.LocationsModule),
    },
    // Redirects
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ajsf_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ajsf/material */ "fCQM");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_paginatorI18n__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/paginatorI18n */ "78/a");




























let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
            _ajsf_material__WEBPACK_IMPORTED_MODULE_25__["MaterialDesignFrameworkModule"],
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
            _ajsf_material__WEBPACK_IMPORTED_MODULE_25__["MaterialDesignFrameworkModule"],
        ],
        providers: [
            {
                provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorIntl"], deps: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateService"]],
                useFactory: (translateService) => new _core_paginatorI18n__WEBPACK_IMPORTED_MODULE_27__["PaginatorI18n"](translateService).getPaginatorIntl()
            }
        ]
    })
], MaterialModule);



/***/ }),

/***/ "y3bW":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/leaflet-map-select-place/leaflet-map-select-place.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-leaflet-map-select-place\"\n     leaflet\n     (leafletClick)=\"onClick($event)\"\n     [(leafletCenter)]=\"center\"\n     [leafletOptions]=\"options\"\n     [leafletLayersControl]=\"layersControl\"\n     [leafletLayers]=\"layers\">\n</div>\n\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n    <mat-form-field class=\"full-width-input\">\n        <input formControlName=\"address\"\n               matInput\n               placeholder=\"{{'Address' | translate}}\">\n    </mat-form-field>\n    <mat-select [hidden]=\"multiple === false\">\n        <mat-option *ngFor=\"let place of places\" [value]=\"place.value\" (onSelectionChange)=\"selectPlace($event)\">\n            {{place.viewValue}}\n        </mat-option>\n    </mat-select>\n</form>\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-router-outlet {\n  top: 57px;\n}\n\n.fill-remaining-space {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvdXRlci1vdXRsZXQge1xuICB0b3A6IDU3cHhcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
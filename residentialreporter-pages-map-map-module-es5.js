(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["residentialreporter-pages-map-map-module"], {
    /***/
    "862v":
    /*!*****************************************!*\
      !*** ./src/app/pages/map/map.module.ts ***!
      \*****************************************/

    /*! exports provided: MapPageModule */

    /***/
    function v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPageModule", function () {
        return MapPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _map_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./map-page.component */
      "xzpp");
      /* harmony import */


      var _map_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./map-routing.module */
      "oLE7");
      /* harmony import */


      var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @asymmetrik/ngx-leaflet */
      "OwhE");

      var MapPageModule = function MapPageModule() {
        _classCallCheck(this, MapPageModule);
      };

      MapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_6__["MapPageRoutingModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__["LeafletModule"]],
        declarations: [_map_page_component__WEBPACK_IMPORTED_MODULE_5__["MapPageComponent"]]
      })], MapPageModule);
      /***/
    },

    /***/
    "Xree":
    /*!***************************************************!*\
      !*** ./src/app/pages/map/map-page.component.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Xree(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.map {\n  width: 100vw;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL21hcC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWFwIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuIl19 */";
      /***/
    },

    /***/
    "Y3dH":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map-page.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y3dH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">Blank</ion-title>\n        </ion-toolbar>\n    </ion-header>\n</ion-content>\n\n<div style=\"height: 100vh\"\n     leaflet\n     [leafletOptions]=\"options\"\n     [leafletLayersControl]=\"layersControl\"\n     [leafletLayers]=\"layers\">\n</div>\n\n\n";
      /***/
    },

    /***/
    "oLE7":
    /*!*************************************************!*\
      !*** ./src/app/pages/map/map-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: MapPageRoutingModule */

    /***/
    function oLE7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function () {
        return MapPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _map_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./map-page.component */
      "xzpp");

      var routes = [{
        path: '',
        component: _map_page_component__WEBPACK_IMPORTED_MODULE_3__["MapPageComponent"]
      }];

      var MapPageRoutingModule = function MapPageRoutingModule() {
        _classCallCheck(this, MapPageRoutingModule);
      };

      MapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MapPageRoutingModule);
      /***/
    },

    /***/
    "xzpp":
    /*!*************************************************!*\
      !*** ./src/app/pages/map/map-page.component.ts ***!
      \*************************************************/

    /*! exports provided: MapPageComponent */

    /***/
    function xzpp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPageComponent", function () {
        return MapPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_map_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./map-page.component.html */
      "Y3dH");
      /* harmony import */


      var _map_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./map-page.component.scss */
      "Xree");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! leaflet */
      "4R65");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _facades_region_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../facades/region.facade */
      "wZc4");

      var MapPageComponent = /*#__PURE__*/function () {
        function MapPageComponent(activatedRoute, regionFacade) {
          _classCallCheck(this, MapPageComponent);

          this.activatedRoute = activatedRoute;
          this.regionFacade = regionFacade;
          this.options = {
            layers: [Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 18,
              attribution: '...'
            })],
            zoom: 7,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["latLng"])(51.1, 10.5)
          };
          this.layersControl = {
            baseLayers: {
              'Open Street Map': Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: '...'
              }),
              'Open Cycle Map': Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"])('https://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: '...'
              })
            },
            overlays: {}
          };
          this.layers = [Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"])([52.879966, 12.726909], {
            icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["icon"])({
              iconSize: [25, 41],
              iconAnchor: [13, 41],
              iconUrl: 'assets/marker-icon.png',
              shadowUrl: 'assets/marker-shadow.png'
            })
          })];
        }

        _createClass(MapPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regionFacade.loadAll();
            this.regions$ = this.regionFacade.all$;
            console.log("REGIONS IN MAP:", this.regions$);
          }
        }]);

        return MapPageComponent;
      }();

      MapPageComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _facades_region_facade__WEBPACK_IMPORTED_MODULE_6__["RegionFacade"]
        }];
      };

      MapPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map',
        template: _raw_loader_map_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MapPageComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=residentialreporter-pages-map-map-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["residentialreporter-pages-home-home-module"],{

/***/ "65wE":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-page.component.ts ***!
  \***************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-page.component.html */ "oCA/");
/* harmony import */ var _home_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.component.scss */ "ujjr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePageComponent = class HomePageComponent {
    constructor() {
    }
};
HomePageComponent.ctorParameters = () => [];
HomePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePageComponent);



/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page.component */ "65wE");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "9oos");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"]]
    })
], HomePageModule);



/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.component */ "65wE");




const routes = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "oCA/":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-page.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">ResidentialReporter</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <div class=\"modal-card\">\n        <img src=\"assets/images/logo-rr.svg\" alt=\"Residential Reporter Logo\">\n        <br>\n        <h1>Willkommen beim Residential Reporter!</h1>\n        Ein Projekt zur Optimierung des Wohnraums durch Aggregation und Erforschung\n        von offenen Daten.\n\n        Die Residential Reporter App wird den Bürger:innen die Möglichkeit geben,\n        mehr auf die Stadtentwicklung Einfluss zu nehmen und sich besser konstruktiv\n        zu beteiligen.\n\n        <h1>Baustelle!</h1>\n        <p>\n            Der Residential Reporter ist noch lange nicht fertig, aber dies ist\n            der erster Prototyp. Die Entwicklung zur fertigen Plattform findet\n            in den nächsten Monaten statt. Weil der Reporter Opensource Software\n            ist, laden wir Dich ein, bei der Entwicklung mitzuhelfen. Dazu ist\n            <a href=\"https://github.com/residentialreporter/\">\n                der gesamte source code auf Github verfügbar.\n            </a>\n            <br>\n\n            Wir hoffen, im dritten oder vierten Quartal mit allen geplanten\n            Funktionen am Start sein zu können.\n\n        </p>\n        <hr>\n        <p>\n            <strong>Wenn Du hier bist zum Testen:</strong>\n            Bitte erlaube\n            <i>\n                <a href=\"https://catchjs.com\" target=\"_blank\">catchjs.com</a>\n            </i>\n            das Ausführen von Javascript.\n            Dies dient der automatischen Meldung von auftauchenden Fehlern.\n            Weil wir ein Opensource-Projekt sind, stellt CatchJS uns diesen\n            erfreulicherweise GDPR/DSGVO-konformen Dienst kostenlos zur\n            Verfügung.\n            <br>\n            Vielen Dank dafür!\n        </p>\n    </div>\n\n    <footer>\n        Das Vorhaben wurde mit Mitteln des Bundesministeriums für Bildung und\n        Forschung unter dem Förderkennzeichen 01IS20S42 gefördert.\n        Die Verantwortung für den Inhalt dieser Veröffentlichung liegt bei den\n        Autoren.\n        <br>\n        <img src=\"assets/images/logo-bmbf.svg\"\n             alt=\"Gefördert durch das Bundesministerium für Bildung und Forschung\">\n        <img src=\"assets/images/PrototypeFund-P-Logo.png\"\n             alt=\"Prototypefund\">\n    </footer>\n</ion-content>\n");

/***/ }),

/***/ "ujjr":
/*!*****************************************************!*\
  !*** ./src/app/pages/home/home-page.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container, #baustelle {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong, #baustelle strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p, #baustelle p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a, #baustelle a {\n  text-decoration: none;\n}\n\n#baustelle {\n  background: url('baustelle.jpg');\n  background-size: cover;\n  height: 100%;\n  padding-top: 40%;\n  vertical-align: middle;\n}\n\n.modal-card {\n  max-width: 42vw;\n  margin-left: 29vw;\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.9);\n  border-radius: 3px;\n  height: 80vh;\n}\n\n.modal-card img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\nfooter {\n  text-align: center;\n  vertical-align: text-bottom;\n}\n\nfooter img {\n  max-width: 250px;\n  max-height: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFFRSxnQ0FBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNiYXVzdGVsbGUge1xuICBAZXh0ZW5kICNjb250YWluZXI7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmRzL2JhdXN0ZWxsZS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0MCU7XG5cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1vZGFsLWNhcmQge1xuICBtYXgtd2lkdGg6IDQydnc7XG4gIG1hcmdpbi1sZWZ0OiAyOXZ3O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OiA4MHZoO1xufVxuXG4ubW9kYWwtY2FyZCBpbWcge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5cbmZvb3RlciBpbWcge1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBtYXgtaGVpZ2h0OiAxODBweDtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=residentialreporter-pages-home-home-module-es2015.js.map
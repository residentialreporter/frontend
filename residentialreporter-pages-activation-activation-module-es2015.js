(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["residentialreporter-pages-activation-activation-module"],{

/***/ "9hCD":
/*!*******************************************************!*\
  !*** ./src/app/pages/activation/activation-page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aXZhdGlvbi9hY3RpdmF0aW9uLXBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWN0aXZhdGlvbi9hY3RpdmF0aW9uLXBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "ce21":
/*!***************************************************************!*\
  !*** ./src/app/pages/activation/activation-page.component.ts ***!
  \***************************************************************/
/*! exports provided: ActivationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationPageComponent", function() { return ActivationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_activation_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./activation-page.component.html */ "g9Pd");
/* harmony import */ var _activation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activation-page.scss */ "9hCD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _residentialreporter_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @residentialreporter/services/user/user.service */ "CFL1");






let ActivationPageComponent = class ActivationPageComponent {
    constructor(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/home';
            /*
            this.activatedRoute.params
                .subscribe(params => {
                    console.log('Activating UUID:', params.uuid);
                    return this.userService.activate(params.uuid);
                });
    
    
            */
            // if (await this.userService.checkAuthenticated()) {
            //    await this.router.navigate([this.returnUrl]);
            // }
        });
    }
};
ActivationPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _residentialreporter_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
ActivationPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-activation-page',
        template: _raw_loader_activation_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_activation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ActivationPageComponent);



/***/ }),

/***/ "g9Pd":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activation/activation-page.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-content>\n        <h2>{{ 'Account activation' | translate }}</h2>\n\n        <div [hidden]=\"userService.isActivated\">\n            {{ 'Your account is now activated and you can' | translate }}\n            <a routerLink=\"/login\">{{ 'log in now.' | translate}}</a>\n        </div>\n\n\n        <div [hidden]=\"!userService.isActivated\">\n            {{ 'Please wait while we activate your account.' | translate }}\n        </div>\n    </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "gXHn":
/*!*******************************************************!*\
  !*** ./src/app/pages/activation/activation.module.ts ***!
  \*******************************************************/
/*! exports provided: ActivationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationPageModule", function() { return ActivationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _activation_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activation-page.component */ "ce21");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _activation_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./activation-routing.module */ "gXt5");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");












let ActivationPageModule = class ActivationPageModule {
};
ActivationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _activation_routing_module__WEBPACK_IMPORTED_MODULE_9__["ActivationPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]
        ],
        declarations: [_activation_page_component__WEBPACK_IMPORTED_MODULE_5__["ActivationPageComponent"]]
    })
], ActivationPageModule);



/***/ }),

/***/ "gXt5":
/*!***************************************************************!*\
  !*** ./src/app/pages/activation/activation-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ActivationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationPageRoutingModule", function() { return ActivationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _activation_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activation-page.component */ "ce21");




const routes = [
    {
        path: ':uuid',
        component: _activation_page_component__WEBPACK_IMPORTED_MODULE_3__["ActivationPageComponent"],
    }
];
let ActivationPageRoutingModule = class ActivationPageRoutingModule {
};
ActivationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ActivationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=residentialreporter-pages-activation-activation-module-es2015.js.map
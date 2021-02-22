(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["residentialreporter-pages-password-change-password-change-module"],{

/***/ "FGjK":
/*!*************************************************************************!*\
  !*** ./src/app/pages/password-change/password-change-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PasswordChangePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangePageRoutingModule", function() { return PasswordChangePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _password_change_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-change-page.component */ "N9xB");




const routes = [
    {
        path: '',
        component: _password_change_page_component__WEBPACK_IMPORTED_MODULE_3__["PasswordChangePageComponent"],
    }
];
let PasswordChangePageRoutingModule = class PasswordChangePageRoutingModule {
};
PasswordChangePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PasswordChangePageRoutingModule);



/***/ }),

/***/ "IAU8":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/password-change/password-change-page.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-content>\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"passwordChangeForm\">\n            <h2>{{ 'Change password' | translate }}</h2>\n\n            <mat-form-field class=\"full-width-input\">\n                <input formControlName=\"password\"\n                       matInput\n                       placeholder=\"{{ 'New Password' | translate }}\"\n                       required>\n                <mat-error>\n                    {{ 'Please provide a valid password' | translate }}\n                </mat-error>\n            </mat-form-field>\n\n            <mat-form-field class=\"full-width-input\">\n                <input formControlName=\"passwordConfirm\"\n                       matInput\n                       placeholder=\"{{ 'Confirm Password' | translate }}\"\n                       required>\n                <mat-error>\n                    {{ 'Please provide a valid password confirmation' | translate }}\n                </mat-error>\n            </mat-form-field>\n            <button color=\"primary\" mat-raised-button>{{ 'Change password' | translate }}</button>\n        </form>\n    </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "J29E":
/*!*****************************************************************!*\
  !*** ./src/app/pages/password-change/password-change-page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFzc3dvcmQtY2hhbmdlL3Bhc3N3b3JkLWNoYW5nZS1wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bhc3N3b3JkLWNoYW5nZS9wYXNzd29yZC1jaGFuZ2UtcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "N9xB":
/*!*************************************************************************!*\
  !*** ./src/app/pages/password-change/password-change-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: PasswordValidation, PasswordChangePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangePageComponent", function() { return PasswordChangePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_password_change_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./password-change-page.component.html */ "IAU8");
/* harmony import */ var _password_change_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-change-page.scss */ "J29E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _residentialreporter_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @residentialreporter/services/user/user.service */ "CFL1");







class PasswordValidation {
    static MatchPassword(AC) {
        let password = AC.get('password').value;
        let passwordConfirm = AC.get('passwordConfirm').value;
        if (password != passwordConfirm) {
            console.log('false');
            AC.get('passwordConfirm').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    }
}
let PasswordChangePageComponent = class PasswordChangePageComponent {
    constructor(fb, route, router, userService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.passwordChangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
            this.passwordChangeForm = this.fb.group({
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            }, {
                validator: PasswordValidation.MatchPassword
            });
            // if (await this.userService.checkAuthenticated()) {
            //    await this.router.navigate([this.returnUrl]);
            // }
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.formSubmitAttempt = false;
            if (this.passwordChangeForm.valid) {
                try {
                    const password = this.passwordChangeForm.get('password').value;
                    yield this.userService.changePassword(password);
                }
                catch (err) {
                    this.passwordInvalid = true;
                }
            }
            else {
                this.formSubmitAttempt = true;
            }
        });
    }
};
PasswordChangePageComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _residentialreporter_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
PasswordChangePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-password-change-page',
        template: _raw_loader_password_change_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_password_change_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PasswordChangePageComponent);



/***/ }),

/***/ "iTKs":
/*!*****************************************************************!*\
  !*** ./src/app/pages/password-change/password-change.module.ts ***!
  \*****************************************************************/
/*! exports provided: PasswordChangePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangePageModule", function() { return PasswordChangePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _password_change_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-change-page.component */ "N9xB");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _password_change_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./password-change-routing.module */ "FGjK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");












let PasswordChangePageModule = class PasswordChangePageModule {
};
PasswordChangePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
            _password_change_routing_module__WEBPACK_IMPORTED_MODULE_9__["PasswordChangePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]
        ],
        declarations: [_password_change_page_component__WEBPACK_IMPORTED_MODULE_5__["PasswordChangePageComponent"]]
    })
], PasswordChangePageModule);



/***/ })

}]);
//# sourceMappingURL=residentialreporter-pages-password-change-password-change-module-es2015.js.map
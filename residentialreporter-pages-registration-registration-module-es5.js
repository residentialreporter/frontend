(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["residentialreporter-pages-registration-registration-module"], {
    /***/
    "GsUH":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/registration/registration-page.component.ts ***!
      \*******************************************************************/

    /*! exports provided: RegistrationPageComponent */

    /***/
    function GsUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function () {
        return RegistrationPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_registration_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./registration-page.component.html */
      "kP5p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RegistrationPageComponent = /*#__PURE__*/function () {
        function RegistrationPageComponent() {
          _classCallCheck(this, RegistrationPageComponent);
        }

        _createClass(RegistrationPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RegistrationPageComponent;
      }();

      RegistrationPageComponent.ctorParameters = function () {
        return [];
      };

      RegistrationPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-registration-page',
        template: _raw_loader_registration_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RegistrationPageComponent);
      /***/
    },

    /***/
    "MOPP":
    /*!*********************************************************************!*\
      !*** ./src/app/components/registration/registration.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function MOPP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "Zsiw":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/registration/registration-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: RegistrationPageRoutingModule */

    /***/
    function Zsiw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function () {
        return RegistrationPageRoutingModule;
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


      var _registration_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registration-page.component */
      "GsUH");

      var routes = [{
        path: '',
        component: _registration_page_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationPageComponent"]
      }];

      var RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
        _classCallCheck(this, RegistrationPageRoutingModule);
      };

      RegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistrationPageRoutingModule);
      /***/
    },

    /***/
    "aEwy":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aEwy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card>\n    <mat-card-content>\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"registrationForm\">\n            <h2>{{'Registration' | translate}}</h2>\n\n            <mat-form-field class=\"full-width-input\">\n                <input formControlName=\"address\"\n                       matInput\n                       placeholder=\"{{'Email address' | translate}}\"\n                       required>\n                <mat-error>\n                    {{'Please provide a valid email address' | translate}}\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"full-width-input\">\n                <input formControlName=\"username\"\n                       matInput\n                       placeholder=\"{{'Username' | translate}}\"\n                       required>\n                <mat-error>\n                    {{'Please provide a valid username' | translate}}\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"full-width-input\">\n                <input formControlName=\"password\"\n                       matInput\n                       placeholder=\"{{'Password' | translate}}\"\n                       required\n                       type=\"password\">\n                <mat-error>\n                    {{'Please provide a valid password' | translate}}\n                </mat-error>\n            </mat-form-field>\n            <mat-form-field class=\"full-width-input\">\n                <input formControlName=\"passwordConfirm\"\n                       matInput\n                       placeholder=\"{{'Password confirm' | translate}}\"\n                       required\n                       type=\"password\">\n                <mat-error>\n                    {{'Please confirm your password' | translate}}\n                </mat-error>\n            </mat-form-field>\n            <button color=\"primary\" mat-raised-button>{{'Register!' | translate}}</button>\n            {{ '* required' | translate}}\n        </form>\n    </mat-card-content>\n</mat-card>\n\n";
      /***/
    },

    /***/
    "dtpt":
    /*!*******************************************************************!*\
      !*** ./src/app/components/registration/registration.component.ts ***!
      \*******************************************************************/

    /*! exports provided: RegistrationComponent */

    /***/
    function dtpt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
        return RegistrationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_registration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./registration.component.html */
      "aEwy");
      /* harmony import */


      var _registration_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registration.component.scss */
      "MOPP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/user/user.service */
      "CFL1");

      var RegistrationComponent = /*#__PURE__*/function () {
        function RegistrationComponent(fb, route, router, userService) {
          _classCallCheck(this, RegistrationComponent);

          this.fb = fb;
          this.route = route;
          this.router = router;
          this.userService = userService;
          this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
          });
        }

        _createClass(RegistrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
                      this.registrationForm = this.fb.group({
                        address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                      }); // if (await this.userService.checkAuthenticated()) {
                      //    await this.router.navigate([this.returnUrl]);
                      // }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var address, username, password, passwordConfirm;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.formSubmitAttempt = false;

                      if (!this.registrationForm.valid) {
                        _context2.next = 16;
                        break;
                      }

                      _context2.prev = 2;
                      address = this.registrationForm.get('address').value;
                      username = this.registrationForm.get('username').value;
                      password = this.registrationForm.get('password').value;
                      passwordConfirm = this.registrationForm.get('passwordConfirm').value;
                      _context2.next = 9;
                      return this.userService.register(address, username, password, passwordConfirm);

                    case 9:
                      _context2.next = 14;
                      break;

                    case 11:
                      _context2.prev = 11;
                      _context2.t0 = _context2["catch"](2);
                      this.addressInvalid = true;

                    case 14:
                      _context2.next = 17;
                      break;

                    case 16:
                      this.formSubmitAttempt = true;

                    case 17:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[2, 11]]);
            }));
          }
        }]);

        return RegistrationComponent;
      }();

      RegistrationComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }];
      };

      RegistrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registration-component',
        template: _raw_loader_registration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registration_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegistrationComponent);
      /***/
    },

    /***/
    "kP5p":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration-page.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kP5p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-registration-component></app-registration-component>\n";
      /***/
    },

    /***/
    "z6fL":
    /*!***********************************************************!*\
      !*** ./src/app/pages/registration/registration.module.ts ***!
      \***********************************************************/

    /*! exports provided: RegistrationPageModule */

    /***/
    function z6fL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function () {
        return RegistrationPageModule;
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


      var _registration_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registration-page.component */
      "GsUH");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _registration_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./registration-routing.module */
      "Zsiw");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _residentialreporter_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @residentialreporter/components/registration/registration.component */
      "dtpt");

      var RegistrationPageModule = function RegistrationPageModule() {
        _classCallCheck(this, RegistrationPageModule);
      };

      RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_9__["RegistrationPageRoutingModule"]],
        declarations: [_registration_page_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageComponent"], _residentialreporter_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationComponent"]]
      })], RegistrationPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=residentialreporter-pages-registration-registration-module-es5.js.map
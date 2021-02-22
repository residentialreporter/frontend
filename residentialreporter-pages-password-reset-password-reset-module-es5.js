(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["residentialreporter-pages-password-reset-password-reset-module"], {
    /***/
    "AMp9":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/password-reset/password-reset.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AMp9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "H5x3":
    /*!***************************************************************!*\
      !*** ./src/app/pages/password-reset/password-reset.module.ts ***!
      \***************************************************************/

    /*! exports provided: PasswordResetPageModule */

    /***/
    function H5x3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordResetPageModule", function () {
        return PasswordResetPageModule;
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


      var _password_reset_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./password-reset-page.component */
      "za7M");
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


      var _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./password-reset-routing.module */
      "MG8N");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _residentialreporter_components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @residentialreporter/components/password-reset/password-reset.component */
      "fRw/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var PasswordResetPageModule = function PasswordResetPageModule() {
        _classCallCheck(this, PasswordResetPageModule);
      };

      PasswordResetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_9__["PasswordResetPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]],
        declarations: [_password_reset_page_component__WEBPACK_IMPORTED_MODULE_5__["PasswordResetPageComponent"], _residentialreporter_components_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_11__["PasswordResetComponent"]]
      })], PasswordResetPageModule);
      /***/
    },

    /***/
    "MG8N":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/password-reset/password-reset-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: PasswordResetPageRoutingModule */

    /***/
    function MG8N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordResetPageRoutingModule", function () {
        return PasswordResetPageRoutingModule;
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


      var _password_reset_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./password-reset-page.component */
      "za7M");

      var routes = [{
        path: '',
        component: _password_reset_page_component__WEBPACK_IMPORTED_MODULE_3__["PasswordResetPageComponent"]
      }];

      var PasswordResetPageRoutingModule = function PasswordResetPageRoutingModule() {
        _classCallCheck(this, PasswordResetPageRoutingModule);
      };

      PasswordResetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PasswordResetPageRoutingModule);
      /***/
    },

    /***/
    "Zj+O":
    /*!***************************************************************!*\
      !*** ./src/app/pages/password-reset/password-reset-page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function ZjO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQtcGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC1wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "fRw/":
    /*!***********************************************************************!*\
      !*** ./src/app/components/password-reset/password-reset.component.ts ***!
      \***********************************************************************/

    /*! exports provided: PasswordResetComponent */

    /***/
    function fRw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function () {
        return PasswordResetComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_password_reset_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./password-reset.component.html */
      "AMp9");
      /* harmony import */


      var _password_reset_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./password-reset.component.scss */
      "nxsX");
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

      var PasswordResetComponent = /*#__PURE__*/function () {
        function PasswordResetComponent(fb, route, router, userService) {
          _classCallCheck(this, PasswordResetComponent);

          this.fb = fb;
          this.route = route;
          this.router = router;
          this.userService = userService;
          this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
          });
        }

        _createClass(PasswordResetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
                      this.resetForm = this.fb.group({
                        address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
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
              var address;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.formSubmitAttempt = false;

                      if (!this.resetForm.valid) {
                        _context2.next = 13;
                        break;
                      }

                      _context2.prev = 2;
                      address = this.resetForm.get('address').value;
                      _context2.next = 6;
                      return this.userService.resetPassword(address);

                    case 6:
                      _context2.next = 11;
                      break;

                    case 8:
                      _context2.prev = 8;
                      _context2.t0 = _context2["catch"](2);
                      this.addressInvalid = true;

                    case 11:
                      _context2.next = 14;
                      break;

                    case 13:
                      this.formSubmitAttempt = true;

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[2, 8]]);
            }));
          }
        }]);

        return PasswordResetComponent;
      }();

      PasswordResetComponent.ctorParameters = function () {
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

      PasswordResetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-password-reset',
        template: _raw_loader_password_reset_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_password_reset_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PasswordResetComponent);
      /***/
    },

    /***/
    "infB":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/password-reset/password-reset-page.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function infB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card>\n    <mat-card-content>\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"resetForm\">\n            <h2>{{ 'Reset password' | translate }}</h2>\n\n            <mat-form-field class=\"full-width-input\">\n                <input formControlName=\"address\"\n                       matInput\n                       placeholder=\"{{ 'Email address' | translate }}\"\n                       required>\n                <mat-error>\n                    {{ 'Please provide a valid email address' | translate }}\n                </mat-error>\n            </mat-form-field>\n            <button color=\"primary\" mat-raised-button>{{ 'Send password reset link' | translate }}</button>\n        </form>\n    </mat-card-content>\n</mat-card>\n";
      /***/
    },

    /***/
    "nxsX":
    /*!*************************************************************************!*\
      !*** ./src/app/components/password-reset/password-reset.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function nxsX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "za7M":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/password-reset/password-reset-page.component.ts ***!
      \***********************************************************************/

    /*! exports provided: PasswordResetPageComponent */

    /***/
    function za7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordResetPageComponent", function () {
        return PasswordResetPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_password_reset_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./password-reset-page.component.html */
      "infB");
      /* harmony import */


      var _password_reset_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./password-reset-page.scss */
      "Zj+O");
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


      var _residentialreporter_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @residentialreporter/services/user/user.service */
      "CFL1");

      var PasswordResetPageComponent = /*#__PURE__*/function () {
        function PasswordResetPageComponent(fb, route, router, userService) {
          _classCallCheck(this, PasswordResetPageComponent);

          this.fb = fb;
          this.route = route;
          this.router = router;
          this.userService = userService;
          this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
          });
        }

        _createClass(PasswordResetPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
                      this.resetForm = this.fb.group({
                        address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                      }); // if (await this.userService.checkAuthenticated()) {
                      //    await this.router.navigate([this.returnUrl]);
                      // }

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var address;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.formSubmitAttempt = false;

                      if (!this.resetForm.valid) {
                        _context4.next = 13;
                        break;
                      }

                      _context4.prev = 2;
                      address = this.resetForm.get('address').value;
                      _context4.next = 6;
                      return this.userService.resetPassword(address);

                    case 6:
                      _context4.next = 11;
                      break;

                    case 8:
                      _context4.prev = 8;
                      _context4.t0 = _context4["catch"](2);
                      this.addressInvalid = true;

                    case 11:
                      _context4.next = 14;
                      break;

                    case 13:
                      this.formSubmitAttempt = true;

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[2, 8]]);
            }));
          }
        }]);

        return PasswordResetPageComponent;
      }();

      PasswordResetPageComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _residentialreporter_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }];
      };

      PasswordResetPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-password-reset-page',
        template: _raw_loader_password_reset_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_password_reset_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PasswordResetPageComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=residentialreporter-pages-password-reset-password-reset-module-es5.js.map
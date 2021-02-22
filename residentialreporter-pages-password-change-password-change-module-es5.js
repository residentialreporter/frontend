(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["residentialreporter-pages-password-change-password-change-module"], {
    /***/
    "FGjK":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/password-change/password-change-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: PasswordChangePageRoutingModule */

    /***/
    function FGjK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordChangePageRoutingModule", function () {
        return PasswordChangePageRoutingModule;
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


      var _password_change_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./password-change-page.component */
      "N9xB");

      var routes = [{
        path: '',
        component: _password_change_page_component__WEBPACK_IMPORTED_MODULE_3__["PasswordChangePageComponent"]
      }];

      var PasswordChangePageRoutingModule = function PasswordChangePageRoutingModule() {
        _classCallCheck(this, PasswordChangePageRoutingModule);
      };

      PasswordChangePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PasswordChangePageRoutingModule);
      /***/
    },

    /***/
    "IAU8":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/password-change/password-change-page.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IAU8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card>\n    <mat-card-content>\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"passwordChangeForm\">\n            <h2>{{ 'Change password' | translate }}</h2>\n\n            <mat-form-field class=\"full-width-input\">\n                <input formControlName=\"password\"\n                       matInput\n                       placeholder=\"{{ 'New Password' | translate }}\"\n                       required>\n                <mat-error>\n                    {{ 'Please provide a valid password' | translate }}\n                </mat-error>\n            </mat-form-field>\n\n            <mat-form-field class=\"full-width-input\">\n                <input formControlName=\"passwordConfirm\"\n                       matInput\n                       placeholder=\"{{ 'Confirm Password' | translate }}\"\n                       required>\n                <mat-error>\n                    {{ 'Please provide a valid password confirmation' | translate }}\n                </mat-error>\n            </mat-form-field>\n            <button color=\"primary\" mat-raised-button>{{ 'Change password' | translate }}</button>\n        </form>\n    </mat-card-content>\n</mat-card>\n";
      /***/
    },

    /***/
    "J29E":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/password-change/password-change-page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function J29E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFzc3dvcmQtY2hhbmdlL3Bhc3N3b3JkLWNoYW5nZS1wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bhc3N3b3JkLWNoYW5nZS9wYXNzd29yZC1jaGFuZ2UtcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "N9xB":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/password-change/password-change-page.component.ts ***!
      \*************************************************************************/

    /*! exports provided: PasswordValidation, PasswordChangePageComponent */

    /***/
    function N9xB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordValidation", function () {
        return PasswordValidation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordChangePageComponent", function () {
        return PasswordChangePageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_password_change_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./password-change-page.component.html */
      "IAU8");
      /* harmony import */


      var _password_change_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./password-change-page.scss */
      "J29E");
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

      var PasswordValidation = /*#__PURE__*/function () {
        function PasswordValidation() {
          _classCallCheck(this, PasswordValidation);
        }

        _createClass(PasswordValidation, null, [{
          key: "MatchPassword",
          value: function MatchPassword(AC) {
            var password = AC.get('password').value;
            var passwordConfirm = AC.get('passwordConfirm').value;

            if (password != passwordConfirm) {
              console.log('false');
              AC.get('passwordConfirm').setErrors({
                MatchPassword: true
              });
            } else {
              console.log('true');
              return null;
            }
          }
        }]);

        return PasswordValidation;
      }();

      var PasswordChangePageComponent = /*#__PURE__*/function () {
        function PasswordChangePageComponent(fb, route, router, userService) {
          _classCallCheck(this, PasswordChangePageComponent);

          this.fb = fb;
          this.route = route;
          this.router = router;
          this.userService = userService;
          this.passwordChangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
          });
        }

        _createClass(PasswordChangePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
                      this.passwordChangeForm = this.fb.group({
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                      }, {
                        validator: PasswordValidation.MatchPassword
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
              var password;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.formSubmitAttempt = false;

                      if (!this.passwordChangeForm.valid) {
                        _context2.next = 13;
                        break;
                      }

                      _context2.prev = 2;
                      password = this.passwordChangeForm.get('password').value;
                      _context2.next = 6;
                      return this.userService.changePassword(password);

                    case 6:
                      _context2.next = 11;
                      break;

                    case 8:
                      _context2.prev = 8;
                      _context2.t0 = _context2["catch"](2);
                      this.passwordInvalid = true;

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

        return PasswordChangePageComponent;
      }();

      PasswordChangePageComponent.ctorParameters = function () {
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

      PasswordChangePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-password-change-page',
        template: _raw_loader_password_change_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_password_change_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PasswordChangePageComponent);
      /***/
    },

    /***/
    "iTKs":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/password-change/password-change.module.ts ***!
      \*****************************************************************/

    /*! exports provided: PasswordChangePageModule */

    /***/
    function iTKs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordChangePageModule", function () {
        return PasswordChangePageModule;
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


      var _password_change_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./password-change-page.component */
      "N9xB");
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


      var _password_change_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./password-change-routing.module */
      "FGjK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var PasswordChangePageModule = function PasswordChangePageModule() {
        _classCallCheck(this, PasswordChangePageModule);
      };

      PasswordChangePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _password_change_routing_module__WEBPACK_IMPORTED_MODULE_9__["PasswordChangePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]],
        declarations: [_password_change_page_component__WEBPACK_IMPORTED_MODULE_5__["PasswordChangePageComponent"]]
      })], PasswordChangePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=residentialreporter-pages-password-change-password-change-module-es5.js.map
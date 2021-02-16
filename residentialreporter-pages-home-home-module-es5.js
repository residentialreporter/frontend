(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["residentialreporter-pages-home-home-module"], {
    /***/
    "65wE":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-page.component.ts ***!
      \***************************************************/

    /*! exports provided: HomePageComponent */

    /***/
    function wE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
        return HomePageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "oCA/");
      /* harmony import */


      var _home_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-page.component.scss */
      "ujjr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomePageComponent = function HomePageComponent() {
        _classCallCheck(this, HomePageComponent);
      };

      HomePageComponent.ctorParameters = function () {
        return [];
      };

      HomePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePageComponent);
      /***/
    },

    /***/
    "99Un":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function Un(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-page.component */
      "65wE");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "9oos");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "9oos":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function oos(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home-page.component */
      "65wE");

      var routes = [{
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "oCA/":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home-page.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function oCA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">ResidentialReporter</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <div id=\"baustelle\">\n        <div class=\"modal-card\">\n            <h1>Baustelle!</h1>\n            <p>\n                <strong>Wenn Du hier bist zum Testen:</strong>\n                Bitte erlaube <i>catchjs.com</i> das ausführen von Javascript.\n                Dies dient der automatischen Meldung von auftauchenden Fehlern.\n                Weil wir ein Opensource-Projekt sind, stellt CatchJS uns diesen\n                erfreulicherweise GDPR/DSGVO-konformen Dienst kostenlos zur\n                Verfügung.\n                <br>\n                Vielen Dank dafür!\n            </p>\n        </div>\n    </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "ujjr":
    /*!*****************************************************!*\
      !*** ./src/app/pages/home/home-page.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function ujjr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container, #baustelle {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong, #baustelle strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p, #baustelle p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a, #baustelle a {\n  text-decoration: none;\n}\n\n#baustelle {\n  background: url('baustelle.jpg');\n  background-size: cover;\n  height: 100%;\n  padding-top: 40%;\n  vertical-align: middle;\n}\n\n#baustelle .modal-card {\n  max-width: 42vw;\n  margin-left: 29vw;\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.9);\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFFRSxnQ0FBQTtFQUNBLHNCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jYmF1c3RlbGxlIHtcbiAgQGV4dGVuZCAjY29udGFpbmVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kcy9iYXVzdGVsbGUuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNDAlO1xuXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbiNiYXVzdGVsbGUgLm1vZGFsLWNhcmQge1xuICBtYXgtd2lkdGg6IDQydnc7XG4gIG1hcmdpbi1sZWZ0OiAyOXZ3O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=residentialreporter-pages-home-home-module-es5.js.map
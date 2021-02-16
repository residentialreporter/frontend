(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["residentialreporter-pages-editor-editor-module"], {
    /***/
    "Sugf":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/editor-page.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Sugf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n    <!--\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">Blank</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    -->\n\n    <div class=\"mat-dialog-container\">\n        <app-object-editor schema=\"hamspam\" uuid=\"foobar\"></app-object-editor>\n    </div>\n</ion-content>\n\n\n";
      /***/
    },

    /***/
    "cihH":
    /*!*******************************************************!*\
      !*** ./src/app/pages/editor/editor-page.component.ts ***!
      \*******************************************************/

    /*! exports provided: EditorPageComponent */

    /***/
    function cihH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorPageComponent", function () {
        return EditorPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editor_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editor-page.component.html */
      "Sugf");
      /* harmony import */


      var _editor_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editor-page.component.scss */
      "fRg+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _residentialreporter_services_socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @residentialreporter/services/socket-client/socket-client.service */
      "q82B");

      var EditorPageComponent = /*#__PURE__*/function () {
        function EditorPageComponent(socket_service) {
          _classCallCheck(this, EditorPageComponent);

          this.socket_service = socket_service;
          this.socket = socket_service;
        }

        _createClass(EditorPageComponent, [{
          key: "pressMe",
          value: function pressMe() {
            console.log('I got pressed!');
            this.socket.sendMessage('Foobar!');
          }
        }]);

        return EditorPageComponent;
      }();

      EditorPageComponent.ctorParameters = function () {
        return [{
          type: _residentialreporter_services_socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_4__["SocketClientService"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_residentialreporter_services_socket_client_socket_client_service__WEBPACK_IMPORTED_MODULE_4__["SocketClientService"]]
          }]
        }];
      };

      EditorPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editor',
        template: _raw_loader_editor_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editor_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditorPageComponent);
      /***/
    },

    /***/
    "fRg+":
    /*!*********************************************************!*\
      !*** ./src/app/pages/editor/editor-page.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function fRg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdG9yL2VkaXRvci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdG9yL2VkaXRvci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "hUiA":
    /*!***********************************************!*\
      !*** ./src/app/pages/editor/editor.module.ts ***!
      \***********************************************/

    /*! exports provided: EditorPageModule */

    /***/
    function hUiA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorPageModule", function () {
        return EditorPageModule;
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


      var _editor_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editor-page.component */
      "cihH");
      /* harmony import */


      var _editor_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editor-routing.module */
      "yIvg");
      /* harmony import */


      var _ajsf_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ajsf/material */
      "fCQM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _residentialreporter_core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @residentialreporter/core/core.module */
      "pKmL");

      var EditorPageModule = function EditorPageModule() {
        _classCallCheck(this, EditorPageModule);
      };

      EditorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _editor_routing_module__WEBPACK_IMPORTED_MODULE_6__["EditorPageRoutingModule"], _ajsf_material__WEBPACK_IMPORTED_MODULE_7__["MaterialDesignFrameworkModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _residentialreporter_core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"]],
        exports: [],
        declarations: [_editor_page_component__WEBPACK_IMPORTED_MODULE_5__["EditorPageComponent"]]
      })], EditorPageModule);
      /***/
    },

    /***/
    "yIvg":
    /*!*******************************************************!*\
      !*** ./src/app/pages/editor/editor-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: EditorPageRoutingModule */

    /***/
    function yIvg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorPageRoutingModule", function () {
        return EditorPageRoutingModule;
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


      var _editor_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editor-page.component */
      "cihH");

      var routes = [{
        path: '',
        component: _editor_page_component__WEBPACK_IMPORTED_MODULE_3__["EditorPageComponent"]
      }];

      var EditorPageRoutingModule = function EditorPageRoutingModule() {
        _classCallCheck(this, EditorPageRoutingModule);
      };

      EditorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditorPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=residentialreporter-pages-editor-editor-module-es5.js.map
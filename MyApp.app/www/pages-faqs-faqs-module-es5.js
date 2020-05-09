function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-faqs-faqs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faqs/faqs.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faqs/faqs.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFaqsFaqsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"meduim\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>FAQs</ion-title>\n      <ion-buttons slot=\"primary\">\n        <ion-button color=\"warning\">\n          <ion-icon  name=\"notifications-outline\"></ion-icon>\n        </ion-button>      \n      </ion-buttons> \n      <ion-buttons slot=\"primary\">\n        <ion-button color=\"warning\">        \n          <ion-icon name=\"alert-outline\"></ion-icon>\n        </ion-button>      \n      </ion-buttons> \n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n      <ion-toolbar>\n        <ion-title size=\"large\">FAQs</ion-title>\n      </ion-toolbar>\n    </ion-header>\n   \n    <div class=\"container\">\n      <h4><strong class=\"capitalize\">FAQs</strong></h4>\n      <br>\n      <app-logo></app-logo>\n    </div>\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/pages/faqs/faqs-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/faqs/faqs-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: FaqsPageRoutingModule */

  /***/
  function srcAppPagesFaqsFaqsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqsPageRoutingModule", function () {
      return FaqsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _faqs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./faqs.page */
    "./src/app/pages/faqs/faqs.page.ts");

    var routes = [{
      path: '',
      component: _faqs_page__WEBPACK_IMPORTED_MODULE_3__["FaqsPage"]
    }];

    var FaqsPageRoutingModule = function FaqsPageRoutingModule() {
      _classCallCheck(this, FaqsPageRoutingModule);
    };

    FaqsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FaqsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/faqs/faqs.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/faqs/faqs.module.ts ***!
    \*******************************************/

  /*! exports provided: FaqsPageModule */

  /***/
  function srcAppPagesFaqsFaqsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqsPageModule", function () {
      return FaqsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _faqs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./faqs-routing.module */
    "./src/app/pages/faqs/faqs-routing.module.ts");
    /* harmony import */


    var _faqs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./faqs.page */
    "./src/app/pages/faqs/faqs.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var FaqsPageModule = function FaqsPageModule() {
      _classCallCheck(this, FaqsPageModule);
    };

    FaqsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _faqs_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqsPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_6__["FaqsPage"]]
    })], FaqsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/faqs/faqs.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/faqs/faqs.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFaqsFaqsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  padding: 10px;\n  margin-top: 200px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0RvY3VtZW50cy9wYW5nYXcvZWNxL3NyYy9hcHAvcGFnZXMvZmFxcy9mYXFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmFxcy9mYXFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYXFzL2ZhcXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufSIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/faqs/faqs.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/faqs/faqs.page.ts ***!
    \*****************************************/

  /*! exports provided: FaqsPage */

  /***/
  function srcAppPagesFaqsFaqsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqsPage", function () {
      return FaqsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FaqsPage = /*#__PURE__*/function () {
      function FaqsPage() {
        _classCallCheck(this, FaqsPage);
      }

      _createClass(FaqsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqsPage;
    }();

    FaqsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faqs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faqs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faqs/faqs.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faqs.page.scss */
      "./src/app/pages/faqs/faqs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FaqsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-faqs-faqs-module-es5.js.map
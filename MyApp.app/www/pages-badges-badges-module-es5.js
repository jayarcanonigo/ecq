function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-badges-badges-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/badges/badges.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/badges/badges.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBadgesBadgesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"medium\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Badges</ion-title>\n      <ion-buttons slot=\"primary\">\n        <ion-button color=\"warning\">\n          <ion-icon  name=\"notifications-outline\"></ion-icon>\n        </ion-button>      \n      </ion-buttons> \n      <ion-buttons slot=\"warning\">\n        <ion-button color=\"secondary\">        \n          <ion-icon name=\"alert-outline\"></ion-icon>\n        </ion-button>      \n      </ion-buttons> \n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n      <ion-toolbar>\n        <ion-title size=\"large\">Badges</ion-title>\n      </ion-toolbar>\n    </ion-header>\n   \n    <div class=\"container\">\n      <h4><strong class=\"capitalize\">Badges</strong></h4>\n      <br>\n      <app-logo></app-logo>\n    </div>\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/pages/badges/badges-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/badges/badges-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: BadgesPageRoutingModule */

  /***/
  function srcAppPagesBadgesBadgesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BadgesPageRoutingModule", function () {
      return BadgesPageRoutingModule;
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


    var _badges_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./badges.page */
    "./src/app/pages/badges/badges.page.ts");

    var routes = [{
      path: '',
      component: _badges_page__WEBPACK_IMPORTED_MODULE_3__["BadgesPage"]
    }];

    var BadgesPageRoutingModule = function BadgesPageRoutingModule() {
      _classCallCheck(this, BadgesPageRoutingModule);
    };

    BadgesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BadgesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/badges/badges.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/badges/badges.module.ts ***!
    \***********************************************/

  /*! exports provided: BadgesPageModule */

  /***/
  function srcAppPagesBadgesBadgesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BadgesPageModule", function () {
      return BadgesPageModule;
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


    var _badges_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./badges-routing.module */
    "./src/app/pages/badges/badges-routing.module.ts");
    /* harmony import */


    var _badges_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./badges.page */
    "./src/app/pages/badges/badges.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var BadgesPageModule = function BadgesPageModule() {
      _classCallCheck(this, BadgesPageModule);
    };

    BadgesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _badges_routing_module__WEBPACK_IMPORTED_MODULE_5__["BadgesPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_badges_page__WEBPACK_IMPORTED_MODULE_6__["BadgesPage"]]
    })], BadgesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/badges/badges.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/badges/badges.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBadgesBadgesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  padding: 10px;\n  margin-top: 200px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0RvY3VtZW50cy9wYW5nYXcvZWNxL3NyYy9hcHAvcGFnZXMvYmFkZ2VzL2JhZGdlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhZGdlcy9iYWRnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhZGdlcy9iYWRnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufSIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/badges/badges.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/badges/badges.page.ts ***!
    \*********************************************/

  /*! exports provided: BadgesPage */

  /***/
  function srcAppPagesBadgesBadgesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BadgesPage", function () {
      return BadgesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BadgesPage = /*#__PURE__*/function () {
      function BadgesPage() {
        _classCallCheck(this, BadgesPage);
      }

      _createClass(BadgesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BadgesPage;
    }();

    BadgesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-badges',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./badges.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/badges/badges.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./badges.page.scss */
      "./src/app/pages/badges/badges.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BadgesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-badges-badges-module-es5.js.map
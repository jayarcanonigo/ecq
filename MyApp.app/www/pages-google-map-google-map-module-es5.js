function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-google-map-google-map-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/google-map/google-map.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/google-map/google-map.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGoogleMapGoogleMapPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Location</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"warning\">\n        <ion-icon  name=\"notifications\"></ion-icon>\n      </ion-button>      \n    </ion-buttons>       \n  </ion-toolbar>\n</ion-header>\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n";
    /***/
  },

  /***/
  "./src/app/pages/google-map/google-map-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/google-map/google-map-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: GoogleMapPageRoutingModule */

  /***/
  function srcAppPagesGoogleMapGoogleMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapPageRoutingModule", function () {
      return GoogleMapPageRoutingModule;
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


    var _google_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./google-map.page */
    "./src/app/pages/google-map/google-map.page.ts");

    var routes = [{
      path: '',
      component: _google_map_page__WEBPACK_IMPORTED_MODULE_3__["GoogleMapPage"]
    }];

    var GoogleMapPageRoutingModule = function GoogleMapPageRoutingModule() {
      _classCallCheck(this, GoogleMapPageRoutingModule);
    };

    GoogleMapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GoogleMapPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/google-map/google-map.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/google-map/google-map.module.ts ***!
    \*******************************************************/

  /*! exports provided: GoogleMapPageModule */

  /***/
  function srcAppPagesGoogleMapGoogleMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapPageModule", function () {
      return GoogleMapPageModule;
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


    var _google_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./google-map-routing.module */
    "./src/app/pages/google-map/google-map-routing.module.ts");
    /* harmony import */


    var _google_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./google-map.page */
    "./src/app/pages/google-map/google-map.page.ts");

    var GoogleMapPageModule = function GoogleMapPageModule() {
      _classCallCheck(this, GoogleMapPageModule);
    };

    GoogleMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _google_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoogleMapPageRoutingModule"]],
      declarations: [_google_map_page__WEBPACK_IMPORTED_MODULE_6__["GoogleMapPage"]]
    })], GoogleMapPageModule);
    /***/
  },

  /***/
  "./src/app/pages/google-map/google-map.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/google-map/google-map.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGoogleMapGoogleMapPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0RvY3VtZW50cy9wYW5nYXcvZWNxL3NyYy9hcHAvcGFnZXMvZ29vZ2xlLW1hcC9nb29nbGUtbWFwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ29vZ2xlLW1hcC9nb29nbGUtbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nb29nbGUtbWFwL2dvb2dsZS1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59IiwiI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/google-map/google-map.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/google-map/google-map.page.ts ***!
    \*****************************************************/

  /*! exports provided: GoogleMapPage */

  /***/
  function srcAppPagesGoogleMapGoogleMapPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleMapPage", function () {
      return GoogleMapPage;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Geolocation;

    var GoogleMapPage = /*#__PURE__*/function () {
      function GoogleMapPage() {
        _classCallCheck(this, GoogleMapPage);

        this.markers = [];
      }

      _createClass(GoogleMapPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMap();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          Geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp); // this.myLat = resp.coords.latitude;
            // this.myLong = resp.coords.longitude;
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
          console.log(this.myLat, " ", this.myLong);
          var mapOptions = {
            center: {
              lat: 7.110656,
              lng: 125.62595839999999
            },
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        }
      }, {
        key: "getCurrentPosition",
        value: function getCurrentPosition() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var coordinates;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Geolocation.getCurrentPosition();

                  case 2:
                    coordinates = _context.sent;
                    console.log('Current', coordinates);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "watchPosition",
        value: function watchPosition() {
          var wait = Geolocation.watchPosition({}, function (position, err) {});
        }
      }]);

      return GoogleMapPage;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], GoogleMapPage.prototype, "mapElement", void 0);
    GoogleMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-google-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./google-map.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/google-map/google-map.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./google-map.page.scss */
      "./src/app/pages/google-map/google-map.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GoogleMapPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-google-map-google-map-module-es5.js.map
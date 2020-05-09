(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reasons-reasons-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reasons/reasons.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reasons/reasons.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>reasons</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/reasons/reasons-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/reasons/reasons-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReasonsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonsPageRoutingModule", function() { return ReasonsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reasons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reasons.page */ "./src/app/pages/reasons/reasons.page.ts");




const routes = [
    {
        path: '',
        component: _reasons_page__WEBPACK_IMPORTED_MODULE_3__["ReasonsPage"]
    }
];
let ReasonsPageRoutingModule = class ReasonsPageRoutingModule {
};
ReasonsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReasonsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reasons/reasons.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/reasons/reasons.module.ts ***!
  \*************************************************/
/*! exports provided: ReasonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonsPageModule", function() { return ReasonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reasons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reasons-routing.module */ "./src/app/pages/reasons/reasons-routing.module.ts");
/* harmony import */ var _reasons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reasons.page */ "./src/app/pages/reasons/reasons.page.ts");







let ReasonsPageModule = class ReasonsPageModule {
};
ReasonsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reasons_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReasonsPageRoutingModule"]
        ],
        declarations: [_reasons_page__WEBPACK_IMPORTED_MODULE_6__["ReasonsPage"]]
    })
], ReasonsPageModule);



/***/ }),

/***/ "./src/app/pages/reasons/reasons.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/reasons/reasons.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlYXNvbnMvcmVhc29ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/reasons/reasons.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/reasons/reasons.page.ts ***!
  \***********************************************/
/*! exports provided: ReasonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonsPage", function() { return ReasonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReasonsPage = class ReasonsPage {
    constructor() { }
    ngOnInit() {
    }
};
ReasonsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reasons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reasons.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reasons/reasons.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reasons.page.scss */ "./src/app/pages/reasons/reasons.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReasonsPage);



/***/ })

}]);
//# sourceMappingURL=pages-reasons-reasons-module-es2015.js.map